import styles				from "./PSHeader.module.scss";
import SearchProvider		from "@/components/SearchProvider/SearchProvider";
import {getProductBoxes}	from "@/components/ProductBoxesRenderer/ProductBoxesRenderer";

export default async function PSHeader() {
	return (
		<header className={styles.headerBox}>
			<img className={styles.headerLogoImage} src="/Images/ProductsStore_Logo.png" alt="Logo" />
			<a href="/">Home</a>
			<a href="/Admin">Admin</a>
			<div className={styles.searchContainer}>
				<SearchProvider
					AllItems={ await getProductBoxes() }
					ItemsContainerSelector=""
					ItemKeySelector={
						async function (item) {
							"use server";
							return item.querySelector(`[data-is-search-key="true"]`).innerText
						}
					}
				/>
			</div>
		</header>
	);
}