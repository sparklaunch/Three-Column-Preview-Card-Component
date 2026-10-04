"use client";

import { useEffect, useState } from "react";
import Item from "../domain/item/Item";
import GridItem from "../features/items/ui/GridItem";
import styles from "./Home.module.css";

export default function Home() {
	const [items, setItems] = useState<Item[]>([]);
	useEffect(() => {
		setItems(items);
	}, []);
	return (
		<main className={styles.main}>
			{items.map((item) => (
				<GridItem key={item.id} item={item} />
			))}
		</main>
	);
}
