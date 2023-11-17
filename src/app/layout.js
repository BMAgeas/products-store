export const metadata = {
	title		: "Products' Store",
	description	: "Main page"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};