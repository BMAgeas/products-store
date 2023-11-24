import styles from "./layout.module.scss";
import "src/app/styles/globals.scss";

export default function RootLayout({ children }) {

	/*
		Herein is there no <head> or <Head> because each page
		its own `metadata` exports, which automatically
		into the html by Next rendered is.
	*/

	return (
		<html lang="en">
			<body className={styles.bodyTag}>
				{children}
			</body>
		</html>
	);

};