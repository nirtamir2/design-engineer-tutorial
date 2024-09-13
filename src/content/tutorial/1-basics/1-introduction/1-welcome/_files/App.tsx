import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (<>
      <h1>Vite + React</h1>
      <div className="bg-red-400">
        <button onClick={() => setCount((count) => count + 33)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
