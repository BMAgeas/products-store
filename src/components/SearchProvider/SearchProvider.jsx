import styles from "./SearchProvider.module.scss";

export default function SearchProvider() {
	return (
		<div className={styles.searchContainer}>
			<form>
				<input type="text" placeholder="Search..." className={styles.searchTextbox} />
				<button type="submit" className={styles.searchButton}>🔍</button>
			</form>
		</div>
	);
}