import {promises as fileSys}	from "fs";
import styles					from "./page.module.scss";
import globalStyles				from "src/app/styles/globals.scss";
import PSHeader					from "@/components/PSHeader/PSHeader";
import PSFooter					from "@/components/PSFooter/PSFooter";
import ProductBox				from "@/components/ProductBox/ProductBox";

export const metadata = {
	title:			"Products Store",
	description:	"Home Page"
};

export default async function Home() {

	const productsApplicationsJson = JSON.parse(await fileSys.readFile(process.cwd() + "/data/products.json", "utf8"));
	
	return (
		<>
			<PSHeader/>
			<main className={styles.mainTag}>
				
				{/* _ Products _ */}
				<section>
					<h1 className={globalStyles.sectionHeading}>Products:</h1>
					<ul className={styles.ProductBoxesContainer}>
						{
							productsApplicationsJson.Products.map(
								(product, index, array) =>
									<ProductBox
										key={index}
										ProductName={product.Name}
										DescriptionText={product.Description}
										ActionButton={<button>Go</button>}
									/>
							)
						}
					</ul>
				</section>

				{/* _ Applications _ */}
				<section>
					<h1 className={globalStyles.sectionHeading}>Applications:</h1>
					<ul className={styles.ProductBoxesContainer}>
						{
							productsApplicationsJson.Applications.map(
								(application, index, array) =>
									<ProductBox
										key={index}
										ProductName={application.Name}
										DescriptionText={application.Description}
										ActionButton={<a href={application.URL}>Go</a>}
									/>
							)
						}
					</ul>
				</section>

			</main>
			<PSFooter/>
		</>
	);

};