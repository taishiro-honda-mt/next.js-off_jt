import { NewForm } from "@/app/components/NewForm";
import Link from "next/link";

export const metadata = {
  title: "NewForm",
};

export default function NewMemoPage() {
  return (
    <main>
      <h1>NewForm</h1>

      <NewForm />
      <Link href={"/"}>ホームに戻る</Link>
    </main>
  );
}
