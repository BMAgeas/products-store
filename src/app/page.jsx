import styles					from "./page.module.scss";
import globalStyles				from "src/app/styles/globals.scss";
import PSHeader					from "@/components/PSHeader/PSHeader";
import PSFooter					from "@/components/PSFooter/PSFooter";
import ProductBoxesRenderer		from "@/components/ProductBoxesRenderer/ProductBoxesRenderer";

export const metadata = {
	title:			"Products Store",
	description:	"Home Page"
};

export default async function Home() {	
	return (
		<>
			<PSHeader/>
			<main className={styles.mainTag}>
				
				<section>
					<h1 className={globalStyles.sectionHeading}>Products & Applications:</h1>
					<ul className={styles.ProductBoxesContainer}>
						{/* <ProductBoxesRenderer Products={ JSON... } /> */}
					</ul>
				</section>

			</main>
			<PSFooter/>
		</>
	);
};