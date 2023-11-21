import styles			from "./PSHeader.module.scss";
import SearchProvider	from "../SearchProvider/SearchProvider";
import Image from "next/image";

export default function PSHeader() {
	return (
		<header className={styles.headerBox}>
			<Image className={styles.headerLogoImage} src="/Images/ProductsStore_Logo.png" alt="Logo" width="30" height="30" />
			<a href="/">Home</a>
			<a href="/Admin">Admin</a>
			<div className={styles.searchContainer}><SearchProvider/></div>
		</header>
	);
}