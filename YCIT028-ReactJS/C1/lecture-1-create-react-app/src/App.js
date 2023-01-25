import { useState } from "react"

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Hello World
      <div>
        <button 
          onClick={() => { 
            const newCount = count + 1
            setCount(newCount)
            }}
            >
              Click to increase
              </button>
        <div>{count}</div>
      </div>
    </div>
  )
}