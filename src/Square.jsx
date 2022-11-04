/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'

const COLORS = [ "#08d2ec" ," #0b7de9", "#5306e2 "," #06eca0","#be06ec"]
const getColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

export const Square = () => {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current

        const setColor = () => {
            const color = getColor()

            element.style.backgroundColor = color
            element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

            setTimeout(() => removeColor(), 1000)
        }

        const removeColor = () => {
            element.style.backgroundColor = "#1d1d1d"
            element.style.boxShadow = `0 0 2px #000`
        }

        element.addEventListener("mouseover", setColor)
        element.addEventListener("mouseleave", removeColor)

        return () => {
            element.removeEventListener("mouseover", setColor)
            element.removeEventListener("mouseleave", removeColor)
        }
        
    }, [])

    return <div ref={ref} className="square"></div>
}