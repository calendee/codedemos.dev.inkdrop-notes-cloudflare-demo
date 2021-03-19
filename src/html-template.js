export const htmlTemplate = ({ content, css, title }) => `
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>${title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<style>${css}</style>
</head>

<body>
	<h1>${title}</h1>
	${content}
	<script async defer src="https://sainfo.justinnoel.dev/latest.js"></script> 
	<noscript><img src="https://sainfo.justinnoel.dev/noscript.gif" alt=""/></noscript>
</body>
</html>
`;
