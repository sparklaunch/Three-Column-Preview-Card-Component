import { clsx } from "clsx";
import { Big_Shoulders, Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca();
const bigShoulders = Big_Shoulders();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="ko"
			className={clsx(lexendDeca.className, bigShoulders.className)}
		>
			<body>{children}</body>
		</html>
	);
}
