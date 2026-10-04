import { items } from "../../db.json";
import GridItem from "../features/items/ui/GridItem";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			{items.map((item) => (
				<GridItem key={item.id} item={item} />
			))}
		</main>
	);
}
