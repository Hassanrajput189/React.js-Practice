import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("clicked")
  }


  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }
  const handleMouseOver = () => {
    alert("mouse over")
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>


      <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} />
      <div onMouseOver={handleMouseOver}>hover</div>   
    </>
  )
}

export default App