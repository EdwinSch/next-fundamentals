"use client";
// NOTE: Example of a client component

import { useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center w-[250px]">
      <h2 className="mb-10 italic capitalize text-green-600">
        client component example
      </h2>
      <p className="text-5xl font-bold">{count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 rounded-md text-white px-4 py-2 mt-4"
      >
        Increment
      </button>
    </div>
  );
}
export default CounterPage;
