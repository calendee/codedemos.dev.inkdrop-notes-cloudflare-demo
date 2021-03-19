import { Router } from "itty-router";
import { getNote } from "./utils/getNote";

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
router.get("/notes/:slug", async ({ params }) => {
	return await getNote(params.slug);
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
