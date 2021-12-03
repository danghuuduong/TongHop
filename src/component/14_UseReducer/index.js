import React, { useReducer, useState, memo } from 'react'
// Học useReducer

// Bài Tập. Đề bài là Tăng và Giảm State kia lên 1 hoặc -1 .
// Nếu như là UseState ta sẽ phân tích như sau :
// 1 .giá trị khởi tạo là : Init State == 0
// 2 . Actions là :  if Up(state + 1 )  , if Dow(state -1 )
//________________________________________________________
// nhưng với reducer ta sẽ phân tích như sau
// 1 .giá trị khởi tạo là : Init State == 0
// 2 . Actions là :  if Up(state + 1 )  , if Dow(state -1 )
// 3.  Thêm bước 3 .  Reducer
// 4 Dispatch
//_____________________Vô Thực hành ______________________

// const [State1, setState1] = useState(0);
const initSate = 10
const Up_Action = 'up'
const Dow_Action = 'dow'
const reducer = (state, action) => {        //Nhận vô 2 input là state + actions , và khuyến cáo sài switch(action)
    switch (action) {
        case Up_Action:
            return state + 1
        case Dow_Action:
            return state - 1
        default:
            // throw new Error('Invalid action ')
            return state
    }
}


function UseReducerTest() {
    const [count, dispatch] = useReducer(reducer, initSate)
    console.log("🙉🍀 reder UseReducerTest")

    return (
        <div style={{ padding: 50, border: '1px solid black', }}>
            <span style={{ margin: 20 }}>{count}</span>
            <button style={{ margin: 20 }} onClick={() => dispatch(Up_Action)}>up</button>
            <button onClick={() => dispatch(Dow_Action)}>dow</button>
        </div>
    )
}

export default memo(UseReducerTest)
