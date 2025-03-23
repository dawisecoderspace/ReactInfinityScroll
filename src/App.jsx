import React from 'react'
import InfinityScroll from './components/InfinityScroll';
import './App.css'



const items = [
  { name: 'ReactJS', img: '/react.svg', article: 'Lorem ipsum dolor sit amet consectetur adipisicint.' },
  { name: 'Vite', img: '/vite.svg', article: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
  { name: 'JavaScript', img: '/javascript.svg', article: 'Lorem ipsum dolor sit amet consectetur adipisicing.' }
];



function App() {
  return (
    <div className="App">
      <h1>React Infinity Scroll</h1>
      <p>Scroll infinitely through the items below</p>
      <InfinityScroll items={items} width={360} />
    </div>
  )
}



export default App
