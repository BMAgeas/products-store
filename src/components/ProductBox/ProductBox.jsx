import styles	from "./ProductBox.module.scss";
import Image	from "next/image";

export default function ProductBox({ ProductName, DescriptionText, ActionButton }) {
	return (
		<li className={styles.productBoxOuter}>
			<Image src={`/Images/ProductImages/Default.jpg`} alt="Product Thumbnail" width={0} height={0} sizes="100vw" style={{ width : "100%", height : "10vw" }} className={styles.productThumbnail} />
				<div>
					<h3 className={styles.productHeading}>{ProductName}</h3>
					<p className={styles.productDescription}>{DescriptionText}</p>
					{ActionButton}
				</div>
		</li>
	);
}