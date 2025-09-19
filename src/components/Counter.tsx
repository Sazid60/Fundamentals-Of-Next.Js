"use client"
import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
        >
          +
        </button>
        <button
          onClick={() => setCount(prev => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
