"use client";
import { useState } from "react";

type Props = {
	initialCount: number;
};

export default function LikeButton({ initialCount }: Props) {
	const [count, setCount] = useState(initialCount);

	return (
		<button type="button" onClick={() => setCount(count + 1)}>
			いいね👍{count}
		</button>
	);
}
