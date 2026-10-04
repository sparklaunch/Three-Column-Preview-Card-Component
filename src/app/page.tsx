import GridItem from "../features/items/ui/GridItem";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<GridItem />
			<GridItem />
			<GridItem />
		</main>
	);
}
