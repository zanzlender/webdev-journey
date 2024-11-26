"use client";

import { useBearStore } from "@/lib/zustand";
import Child from "./_components/child";

export default function Test() {
  console.log("RERENDERING PAGE");
  const { increasePopulation, bears } = useBearStore();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-">
      <p className="text-xl mb-20">
        Simple example using different and same states, all components rerender{" "}
      </p>
      <h1>Bears: {bears}</h1>
      <button onClick={() => increasePopulation(1)}>Increase population</button>

      <div className="border-2 border-green-600 flex flex-col items-center justify-center gap-4 p-10">
        <Child />
      </div>
    </div>
  );
}
