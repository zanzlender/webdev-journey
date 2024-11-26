"use client";

import { useBearStore } from "@/lib/zustand";
import SubChild from "./sub-child";
import { Suspense } from "react";

export default function Child() {
  console.log("RERENDERING CHILD");
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <h1>Bears 2: {bears}</h1>
      <button onClick={() => increasePopulation(1)}>Increase population</button>

      <div className="border-2 border-blue-600 flex flex-col items-center justify-center gap-4 p-20">
        <Suspense fallback={<div>Loading...</div>}>
          <SubChild />
        </Suspense>
      </div>
    </div>
  );
}
