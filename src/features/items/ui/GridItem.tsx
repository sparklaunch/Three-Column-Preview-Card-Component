import Item from "@/src/domain/item/Item";
import styles from "./GridItem.module.css";

export default function GridItem({ item }: { item: Item }) {
	return <section className={styles.section}></section>;
}
