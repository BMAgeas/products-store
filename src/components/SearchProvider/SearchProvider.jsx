import styles from "./SearchProvider.module.scss";

export default function SearchProvider() {
	return (
		<form>
			<input type="text" placeholder="Search..." className={styles.searchTextbox} />
			<button className={styles.searchButton}>🔍</button>
		</form>
	);
}