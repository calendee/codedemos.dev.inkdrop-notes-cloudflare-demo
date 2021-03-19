import marked from "marked";

import { getJson } from "./getJson";
import { htmlTemplate } from "../html-template";

export async function getNote(slug) {
	console.log(`slug = ${JSON.stringify(slug)}`);

	const { inkdropAccountId, inkdropNotedId } =
		(await INKDROP_NOTES.get(`${slug}`, "json")) || {};

	console.log("Note Details");
	console.log(inkdropAccountId, inkdropNotedId);

	if (!inkdropAccountId || !inkdropNotedId) {
		return new Response("Not Found.", { status: 404 });
	}

	const inkdropEndpoint = await INKDROP_NOTES.get("inkdrop-endpoint");

	console.log("inkdropEndpoint");
	console.log(inkdropEndpoint);

	if (!inkdropEndpoint) {
		return new Response("Internal Server Error", { status: 500 });
	}

	if (!inkdropNotedId || !inkdropAccountId) {
		console.log(
			`Missing inkdropAccountId (${inkdropAccountId}) or inkdropNotedId (${inkdropNotedId})`,
		);
		return new Response("Not Found", { status: 404 });
	}

	const { json, error } = await getJson(
		`${inkdropEndpoint}${inkdropAccountId}/${inkdropNotedId}`,
	);

	if (!json) {
		return new Response("Not Found", { status: 404 });
	}

	if (error || !json.body) {
		return new Response("Internal Server Error", { status: 500 });
	}

	console.log("JSON!");
	console.log(json);

	const htmlFromMarkdown = marked(json.body);
	const css = await INKDROP_NOTES.get("css");

	const html = htmlTemplate({
		title: json.title,
		content: htmlFromMarkdown,
		css,
	});

	return new Response(html, {
		headers: {
			"content-type": "text/html; charset=UTF-8",
		},
	});
}
