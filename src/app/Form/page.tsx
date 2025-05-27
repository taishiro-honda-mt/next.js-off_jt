import Link from "next/link";
import Form from "../components/Form";

export const metadata = {
  title: "Formのページ",
};

export default function FormPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1>Formのページです</h1>

      <Form />
      <Link href={"/"}>ホームに戻る</Link>
    </main>
  );
}
