// import React, { memo } from 'react'

// export default memo(function Conter_click({ one_Start }) {
//     console.log('re-render_Conter_click');
//     return (
//         <button onClick={one_Start} style={{ margin: 20 }}>Start</button>
//     )
// })


//--------------------------------------------------------------

import React, { memo } from 'react'

function Conterclick({ OnStart }) {
    console.log('re-render phía conter');
    return (
        <button onClick={OnStart} style={{ margin: 20 }}>Start</button>
    )
}

export default memo(Conterclick)


