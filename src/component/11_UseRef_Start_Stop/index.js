import React, { useRef, useState } from 'react'
//cách 1 let dem (k khoa học)
export default function Start_Stop() {
    const [count, setCount] = useState(60)
    const dem = useRef() //cách 2 oke 
    const handle_Start = () => {
        dem.current = setInterval(() => {
            setCount(pev => pev - 1)
        }, 1000)
    }
    const handle_Stop = () => {
        clearInterval(dem.current)
    }

    return (
        <div style={{ padding: 100 }}>
            <span>{count}</span>
            <button onClick={handle_Start} style={{ margin: 20 }}>Start</button>
            <button onClick={handle_Stop}> Stop</button>
        </div>
    )
}
