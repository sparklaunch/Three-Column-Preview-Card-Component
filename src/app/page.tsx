"use client";

import { useEffect, useState } from "react";
import { items } from "../../db.json";
import Item from "../domain/item/Item";
import GridItem from "../features/items/ui/GridItem";
import styles from "./Home.module.css";

export default function Home() {
	const [gridItems, setGridItems] = useState<Item[]>([]);
	useEffect(() => {
		setGridItems(items);
	}, []);
	return (
		<main className={styles.main}>
			{items.map((item) => (
				<GridItem key={item.id} item={item} />
			))}
		</main>
	);
}
