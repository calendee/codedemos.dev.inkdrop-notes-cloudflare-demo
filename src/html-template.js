export const htmlTemplate = ({ content, css, title }) => `
<!doctype html>
<!-- version 13 -->
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>${title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<style>${css}</style>

	<!-- UNCOMMENT THIS !!!! -->
	<!-- <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css"> -->
</head>

<body>
	<h1>${title}</h1>
	${content}
	<script async defer src="https://sainfo.justinnoel.dev/latest.js"></script> 
	<noscript><img src="https://sainfo.justinnoel.dev/noscript.gif" alt=""/></noscript>
</body>
</html>
`;