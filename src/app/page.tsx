import Link from "next/link";
export const metadata = {
	title: "ホーム",
};

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center">
			<h1>ようこそ！ホームページ</h1>

			<Link href="/memos">メモ一覧ページへ</Link>
		</main>
	);
}
