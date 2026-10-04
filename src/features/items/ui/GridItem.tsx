import Item from "@/src/domain/item/Item";
import Image from "next/image";
import styles from "./GridItem.module.css";

export default function GridItem({ item }: { item: Item }) {
	return (
		<section
			className={styles.section}
			style={{
				backgroundColor: `var(--color-${item.color})`
			}}
		>
			<Image
				src={`/assets/images/${item.icon}`}
				alt={item.title}
				width={80}
				height={80}
				className={styles.icon}
			/>
			<h2 className={styles.title}>{item.title}</h2>
			<p className={styles.content}>{item.content}</p>
			<button
				type="button"
				className={styles.learnButton}
				style={{
					color: `var(--color-${item.color})`
				}}
			>
				Learn More
			</button>
		</section>
	);
}
