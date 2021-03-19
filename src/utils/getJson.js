export async function getJson(url, options) {
	try {
		const response = await fetch(url, options);

		if (
			!response.ok ||
			response.headers.get("content-type") === "application/json"
		) {
			console.log(
				`ERROR: getJSON -> Invalid Response -> response.status = ${response.status}`,
			);
			console.log(
				`ERROR: getJSON -> Invalid Response ->response.statusText = ${response.statusText}`,
			);
			return { json: null, error: "request failed" };
		}

		const json = await response.json();

		return { json, error: null };
	} catch (e) {
		console.log(`ERROR: getJSON -> exception -> ${e.message}`);

		return { json: null, error: "request failed" };
	}
}
