import styles			from "./PSHeader.module.scss";
import SearchProvider	from "../SearchProvider/SearchProvider";

export default function PSHeader() {
	return (
		<header className={styles.HeaderBox}>
			(Logo)
			Products Store
			<a href="/">Home</a>
			<a href="/Admin">Admin</a>
			<SearchProvider/>
		</header>
	);
}