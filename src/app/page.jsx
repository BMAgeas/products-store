import PSHeader				from "@/components/PSHeader/PSHeader";
import globalStyleVariables	from "./variables.module.scss";
import {promises as fs}		from "fs";

export default async function Home() {
	
	const productsJson = JSON.parse(await fs.readFile(process.cwd() + "/data/products.json", "utf8"));
	
	return (
		<>
			<PSHeader/>
			<main style={{ backgroundColor : globalStyleVariables.subtleGrey }}>
				
				<b>Products:</b>

				{
					productsJson.Products.map(
						(Product, index, array) =>
							<p key={index}>{Product.Name}</p>
					)
				}

			</main>
			<footer>Products Store (c) 2023</footer>
		</>
	);

};