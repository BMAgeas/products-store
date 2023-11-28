"use client";
import styles from "./SearchProvider.module.scss";

export default function SearchProvider({ AllItems, ItemsContainerSelector, ItemKeySelector }) {

	/*
		AllItems							An array of all the Items' Elements (added/removed from the ItemsContainer element depending on the search string)
		ItemsContainerSelector				e.g. "#Products"
		ItemKeySelector						Takes in a direct-child element of the ItemsParentSelector element,
											and returns a searchable Key for the item
	*/
	
	const performSearch = () => {
		
		console.log("AllItems: " + AllItems);

	};
	
	return (
		<form>
			<input type="text" placeholder="Search..." className={styles.searchTextbox} />
			<button type="button" className={styles.searchButton} onClick={performSearch}>🔍</button>
		</form>
	);

}