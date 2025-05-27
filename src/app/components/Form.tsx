"use client";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  age: number;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        {...register("name", {
          required: "名前は必須です",
        })}
        placeholder="名前"
      />

      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("email", {
          required: "メールアドレスは必須です",

          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
            message: "メールアドレスの形式が正しくありません",
          },
        })}
        placeholder="email"
      />

      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("age", {
          required: "年齢は必須です",

          pattern: {
            value: /^[0-9]+$/,
            message: "年齢は数値で入力してください",
          },

          min: {
            value: 18,
            message: "18歳以上で入力してください",
          },

          max: {
            value: 100,
            message: "100歳以下で入力してください",
          },
        })}
        placeholder="年齢"
      />

      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">送信</button>
    </form>
  );
}
