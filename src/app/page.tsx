import Link from "next/link";
import LikeButton from "./components/LikeButton";

export const metadata = {
  title: "ホーム",
};

export default function Home() {
  const today = new Date().toLocaleDateString();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1>ようこそ！ホームページ</h1>
      <p>今日は {today} です。</p>

      <LikeButton initialCount={99} />
      <Link href="/memos">メモ一覧ページへ</Link>
      <Link href="/Form">Formへ</Link>
    </main>
  );
}
