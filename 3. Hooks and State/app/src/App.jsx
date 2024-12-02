import { useRef, useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Hooks are basically function that are built in in react and can also be created
  // State is a variable that is used to set the initial value and to change it if needed

// Their are three main Hooks used in react 

  // useState
  const [count, setCount] = useState(0)

  // useEffect
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  // useRef
  const first = useRef(second)
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
