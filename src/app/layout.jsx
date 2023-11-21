import globalStyleVars	from "src/app/variables.module.scss";
import "src/app/global.scss";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>HEAD: Products' Store</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta name="description" content="Ben Mullan test repository" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${globalStyleVars.mainFont}`} precedence="default" />
			</head>
			<body>{children}</body>
		</html>
	);
};