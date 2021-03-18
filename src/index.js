import { Router } from "itty-router";

// create a router
const router = Router(); // this is a Proxy, not a class

// GET collection index
router.get("/notes", () => new Response("Notes Index!"));

// GET item
router.get("/notes/:id", ({ params }) => new Response(`Notes #${params.id}`));

// 404 for everything else
router.all("*", () => new Response("Not Found.", { status: 404 }));

// attach the router "handle" to the event handler
addEventListener("fetch", event =>
	event.respondWith(router.handle(event.request)),
);
