import React, { useState } from 'react'
import './App.css'
function App() {

  const color = "#187498"
  const btncolor = "#C4DDFF"
  const bordus = '0rem 3rem'
  const [bg, setbBg] = useState(color)
  const [name, setName] = useState("Hit Me")
  const [butClr, setButClr] = useState(btncolor)
  const [radius, setRadius] = useState(bordus)
  const bgChange = () => {
    let newBg = "#205345"
    setbBg(newBg)
    setName("You have got 🍗🍗")
    setButClr("#FFC4DD")
    setRadius('3rem 0rem')
  }
  const bgBack = () => {
    let newBg = "#417D7A"
    setbBg(newBg)
    setName("Oh No ! 😣😣")
    setButClr("#FFEF82")
    setRadius('0rem 3rem')
  }
  return (
    <div className='App' style={{ backgroundColor: bg }}>
      <button onClick={bgChange} onDoubleClick={bgBack} style={{ backgroundColor: butClr, borderRadius: radius }}  >{name}</button>
    </div>
  )
}

export default App
