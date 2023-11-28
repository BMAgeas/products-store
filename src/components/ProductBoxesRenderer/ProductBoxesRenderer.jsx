/*
	dataProxy.jsx - Abstraction layer between products.json and its contents
*/

import {promises as fileSys}	from "fs";
import ProductBox				from "@/components/ProductBox/ProductBox";

export const getProductBoxes = async () => {

	let allProductBoxes = [];
	const productsAndApplications_JSON = JSON.parse(await fileSys.readFile(process.cwd() + "/data/productsAndApplications.json", "utf8"));

	// Products
	allProductBoxes.push(
		productsAndApplications_JSON.Products.map(
			(product, index, array) => (
				<ProductBox
					key={index}
					ProductName={product.Name}
					DescriptionText={product.Description}
					ActionButton={<button>Buy</button>}
				/>
			)
		)
	);

	// Applications
	allProductBoxes.push(
		productsAndApplications_JSON.Applications.map(
			(application, index, array) => (
				<ProductBox
					key={index}
					ProductName={application.Name}
					DescriptionText={application.Description}
					ActionButton={<a href={application.URL}>Go</a>}
				/>
			)
		)
	);

	return allProductBoxes;

};

export default function ProductBoxesRenderer() {
	return getProductBoxes();
}