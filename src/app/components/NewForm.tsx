"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { z } from "zod";

// スキーマ定義
const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "10文字以上で入力してください"),
});

type FormValues = z.infer<typeof schema>;

export function NewForm() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  //成功時
  const onValid = (data: FormValues) => {
    console.log("送信データ:", data);
    setMessage("登録完了");
    reset();
  };

  //エラー時
  const onInValid = (errors: FieldErrors<FormValues>) => {
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)} className="flex flex-col">
      <input {...register("title")} placeholder="タイトル" className="border" />
      {errors.title && <p> {errors.title.message} </p>}

      <textarea
        {...register("content")}
        placeholder="コンテンツ"
        className="border"
      />
      {errors.content && <p> {errors.content.message} </p>}

      {message && <p>{message}</p>}

      <button type="submit">送信</button>
    </form>
  );
}
