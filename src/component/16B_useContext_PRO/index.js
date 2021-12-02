import React, { useContext } from 'react'
import {ThemeContext} from '../../ThemeContext_Provide'
function PHanmuoisauB() {
    const Giatri = useContext(ThemeContext)
    return (
        <div>
            {Giatri}
        </div>
    )
}

export default PHanmuoisauB
