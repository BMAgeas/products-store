import styles			from "./PSHeader.module.scss";
import SearchProvider	from "@/components/SearchProvider/SearchProvider";


export default function PSHeader() {
	return (
		<header className={styles.headerBox}>
			<img className={styles.headerLogoImage} src="/Images/ProductsStore_Logo.png" alt="Logo" />
			<a href="/">Home</a>
			<a href="/Admin">Admin</a>
			<div className={styles.searchContainer}><SearchProvider/></div>
		</header>
	);
}