import { Router } from "itty-router";

import { htmlTemplate } from "./html-template";

const router = Router();

// GET notes list
router.get("/notes", () => {
	const html = htmlTemplate({
		title: "🐶 Doggo Woofs",
		content: "<p>Heckin what a nice doggo woof list!</p>",
		css: null,
	});
	return new Response(html, {
		headers: {
			"content-type": "text/html; charset=UTF-8",
		},
	});
});

// GET specific note
router.get("/notes/:id", ({ params }) => {
	console.log(`Params = ${JSON.stringify(params)}`);
	const html = htmlTemplate({
		title: `🐶 Doggo Woof ${params.id}`,
		content:
			"<p>The neighborhood pupper you are doing me the shock he made many woofs very taste wow stop it fren the neighborhood pupper very good spot heckin angery woofer, blep you are doing me the shock pupper big ol dat tungg tho pupperino.</p>",
		css: null,
	});

	return new Response(html, {
		headers: {
			"content-type": "text/html; charset=UTF-8",
		},
	});
});

// All other GETs
router.get("*", () => new Response("Not Found.", { status: 404 }));

// Forbidden for everything else
router.all("*", () => new Response("Forbidden", { status: 403 }));

// attach the router "handle" to the event handler
addEventListener("fetch", event => {
	console.log(`${event.request.method} ${event.request.url} at ${Date.now()}`);
	event.respondWith(router.handle(event.request));
});
