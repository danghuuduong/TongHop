import React, { useCallback, useRef, useState } from 'react'
import Conterclick from './index2'
//cách 1 let dem (k khoa học)
export default function UseCallBack_test() {
    const [count, setCount] = useState(60)
    const dem = useRef() //cách 2 oke 
    const handle_Start = useCallback(() => {
        dem.current = setInterval(() => {
            setCount(pev => pev - 1)
        }, 2000)
        console.log('re-render hàm Start');
    }, [])
    const handle_Stop = useCallback(() => {
        clearInterval(dem.current)
    }, [])
    console.log('re-render chính');
    return (
        <div style={{ padding: 100 }}>
            <span>{count}</span>
            {/* <button onClick={handle_Start} style={{ margin: 20 }}>Start</button> */}
            <Conterclick OnStart={handle_Start} />

            <button onClick={handle_Stop}> Stop</button>
        </div>
    )
}
