import { useState } from 'react'
import ComB from './comB'
//context
//CompA => CompB => CompC

//1. Create context.
//2. Provider.
//3. Consumer.
function Use_contex() {
    const [name, setName] = useState('Duong')
    return (
        <div>
            <ComB name={name} />
        </div>
    )
}

export default Use_contex
