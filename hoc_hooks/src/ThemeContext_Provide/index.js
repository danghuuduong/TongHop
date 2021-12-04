import {createContext,useState} from 'react'

const ThemeContext = createContext()
function ThemeProvider({children}) {
    const [name,setName] = useState('Duong')
    return (
        <ThemeContext.Provider value={name}> 
            {children}
        </ThemeContext.Provider>
    )
}

export  {ThemeContext,ThemeProvider}
