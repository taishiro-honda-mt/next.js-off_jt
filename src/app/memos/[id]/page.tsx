import Link from "next/link";
export const metadata = {
	title: "IDの詳細ページ",
};
export default function detail(props: { params: { id: string } }) {
	const id = props.params.id;
	return (
		<main className="min-h-screen flex flex-col items-center">
			<h1>詳細ページ</h1>
			<p>このページのIDは{id}です。</p>

			<Link href={"/memos"}>メモページに戻る</Link>
			<Link href={"/"}>ホームに戻る</Link>
		</main>
	);
}
