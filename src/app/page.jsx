import styles				from "./page.module.scss";
import {promises as fs}		from "fs";
import PSHeader				from "@/components/PSHeader/PSHeader";
import ProductBox			from "@/components/ProductBox/ProductBox";

export default async function Home() {
	
	const productsJson = JSON.parse(await fs.readFile(process.cwd() + "/data/products.json", "utf8"));
	
	return (
		<>
			<PSHeader/>
			<main className={styles.mainTag}>
				
				<h1 style={{ textAlign : "center" }}>Products:</h1>
				
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