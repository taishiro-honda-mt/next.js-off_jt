"use client";
import { useState } from "react";
import { useEffect } from "react";

export function ClockApp() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    });
    return () => clearInterval(timer);
  }, []);
  return (
    <main>
      <p>現在の時刻：{now.toLocaleTimeString()}</p>
    </main>
  );
}
