export const metadata = {
	title		: "Products' Store",
	description	: "Main ProductBoxes page"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};