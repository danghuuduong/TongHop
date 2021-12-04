import { createContext, useState } from 'react'
import ComB from './comB'
//context
//CompA => CompB => CompC

//1. Create context.
//2. Provider.
//3. Consumer.
//________________________________________________________
// bắt đầu
//1. khởi tạo context
export const ThemeContext = createContext()
//2. Provider. === <ThemeContext.Provider></ThemeContext.Provider>
//  + bỏ giá trị props cần truyền qua === value={name}
//  + export xuất khẩu nó đi nước ngoài  const ThemeContext = createContext()
//3. Consumer. + mở cái component con cần truyền props ( ở đây là Comp_C)
// import nhập khẩu nó về sài ( mở bên component con để sài)

function Use_contex() {
    const [name, setName] = useState('Duong')
    return (
        <ThemeContext.Provider value={name}> 
            <ComB />
        </ThemeContext.Provider>
    )
}

export default Use_contex
