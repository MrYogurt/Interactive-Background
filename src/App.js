import './App.css'
import { useEffect, useState, memo } from 'react'
import { Square } from "./Square"

const Squares = memo(({ squaresCount }) => ([...Array(squaresCount).keys()].map(item => <Square key={item} />)))

const App = () => {
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ squaresCount, setSquaresCount ] = useState(windowWidth * 3)

  useEffect(() => {
    const recalculateSquares = () => {
      if (windowWidth < window.innerWidth) {
        const newWidth = window.innerWidth

        setWindowWidth(newWidth)
        setSquaresCount(newWidth * 3)
      }
    }

    window.addEventListener('resize', recalculateSquares)

    return () => window.removeEventListener('resize', recalculateSquares)
  })

  return (
    <div className="container">
      <Squares squaresCount={squaresCount} />
    </div>
  )
}

export default App
