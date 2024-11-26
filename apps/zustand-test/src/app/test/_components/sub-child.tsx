"use client";

import { useCatStore } from "@/lib/zustand";

export default function SubChild() {
  console.log("RERENDERING SUB CHILD");
  const cats = useCatStore((state) => state.cats);
  const increasePopulation = useCatStore((state) => state.increasePopulation);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <h1>cats 1: {cats}</h1>
      <button onClick={() => increasePopulation(1)}>Increase population</button>
    </div>
  );
}
