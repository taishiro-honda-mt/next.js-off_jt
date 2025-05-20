import Link from "next/link";
export const metadata = {
	title: "memos",
};

type Memo = {
	id: string;
	title: string;
};

const memos: Memo[] = [
	{ id: "1", title: "ID:1のページ" },
	{ id: "2", title: "ID:2のページ" },
	{ id: "3", title: "ID:3のページ" },
];

export default function memoPage() {
	return (
		<main>
			<h1>メモ一覧ページです</h1>

			<ul>
				{memos.map((memo) => (
					<li key={memo.id}>
						<Link href={`/memos/${memo.id}`}>{memo.title}</Link>
					</li>
				))}
			</ul>

			<Link href={"/"}>ホームに戻る</Link>
		</main>
	);
}
