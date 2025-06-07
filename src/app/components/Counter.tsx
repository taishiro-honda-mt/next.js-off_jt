"use client";

import { useState } from "react";

export function CountApp() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <p>カウントアプリ</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -1
      </button>

      <p>{count}</p>
    </main>
  );
}
