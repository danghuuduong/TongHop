import React, { useReducer, useState } from 'react'
//1. Init state
const initState = {
    job: '',
    jobs: []
}
//2. Actions
const Set_Jon = 'set_job'

function UseReducerTest_Lan2() {

    return (
        <div style={{ padding: 50, border: '1px solid black', }}>
            <h3>Todo</h3>
            <input
                placeholder="enter todo...."
            />
            <button>Add</button>
            <ul>
                <li> &times;</li>
            </ul>
        </div>
    )
}

export default UseReducerTest_Lan2
