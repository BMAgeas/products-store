import styles	from "./ProductBox.module.scss";
import Image	from "next/image";

export default function ProductBox({ ProductName }) {
	return (
		<li className={styles.productBoxOuter}>
			<figure>
				<Image src={`/Images/ProductImages/Default.jpg`} alt="Product Thumbnail" width={0} height={0} sizes="100vw" style={{ width : "100%", height : "auto" }} className={styles.productThumbnail} />
				<figcaption>
					<h6 className={styles.productHeading}><strong>{ProductName}</strong></h6>
					Description text...
				</figcaption>
			</figure>
		</li>
	);
}