import styles from "./../app/global.scss";

export const metadata = {
	title		: "Products' Store",
	description	: "Main ProductBoxes page"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.bodyTag}>{children}</body>
		</html>
	);
};