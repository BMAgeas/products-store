// ↓ `import {promises as fs} from "fs";` does not work. Not sure why.
const fs						= require("fs");
import styles					from "./ProductBox.module.scss";

export default function ProductBox({ ProductName, DescriptionText, ActionButton }) {
	return (
		<li className={styles.productBoxOuter}>

			<object
				data={
					(
						(imagesDir = "/Images/ProductImages") =>
							fs.existsSync(`${process.cwd()}/public${imagesDir}/${ProductName}.jpg`)
							? `${imagesDir}/${ProductName}.jpg`
							: `${imagesDir}/Default.jpg`
					)()
				}
				className={styles.productThumbnail}
			/>

			<div className={styles.productBoxTextHalf}>
				<h3 className={styles.productHeading}>{ProductName}</h3>
				<p className={styles.productDescription}>{DescriptionText}</p>
				{ActionButton}
			</div>

		</li>
	);
}