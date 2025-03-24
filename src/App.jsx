import React from 'react'
import InfinityScroll from './components/InfinityScroll'
import './App.css'
import img1 from '/react.svg'
import img2 from '/vite.svg'
import img3 from '/javascript.svg'



// Sample items array for the infinity scroll
const items = [
  { name: 'ReactJS', img: img1, article: 'Lorem ipsum dolor sit amet consectetur adipisicint.' },
  { name: 'Vite', img: img2, article: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
  { name: 'JavaScript', img: img3, article: 'Lorem ipsum dolor sit amet consectetur adipisicing.' }
]



function App() {
  return (
    <div className="App">
      <h1>React Infinity Scroll</h1>
      <p>Scroll infinitely through the items below</p>
      {/* InfinityScroll component with some default props */}
      <InfinityScroll items={items} width={360} />
    </div>
  )
}



export default App

