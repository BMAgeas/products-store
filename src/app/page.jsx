import {promises as fileSys}	from "fs";
import styles					from "./page.module.scss";
import PSHeader					from "@/components/PSHeader/PSHeader";
import ProductBox				from "@/components/ProductBox/ProductBox";

export const metadata = {
	title:			"Products Store",
	description:	"Home Page"
};

export default async function Home() {

	const productsJson = JSON.parse(await fileSys.readFile(process.cwd() + "/data/products.json", "utf8"));
	
	return (
		<>
			<PSHeader/>
			<main className={styles.mainTag}>
				
				<h1 className={styles.sectionHeading}>Products:</h1>
				<ul className={styles.ProductBoxesContainer}>
					{
						productsJson.Products.map(
							(Product, index, array) => <ProductBox key={index} ProductName={Product.Name} />
						)
					}
				</ul>

			</main>
			<footer>Products Store (c) 2023</footer>
		</>
	);

};