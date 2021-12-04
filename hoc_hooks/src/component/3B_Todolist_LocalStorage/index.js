import React from 'react'

export default function Todolist_localStorage() {
    const vlLocal = JSON.parse(localStorage.getItem("giatri"))
    const [getvalue, setGetvalue] = React.useState('')
    const [submitt, setSubmitt] = React.useState(vlLocal || [])

    const handleSubmit = () => {
        setSubmitt(pev => {
            const newvl = [...pev, getvalue]
            localStorage.setItem('giatri', JSON.stringify(newvl))
            return newvl
        })
        setGetvalue('')
    }
    const handle_RemoveItem_All = () => {
        setSubmitt([])
        localStorage.removeItem('giatri')
    }
    const removeItem = (value) => {
        const removeid = submitt.filter(x => x !== value)
        setSubmitt(removeid)
    }
    return (
        <div className="App" style={{ padding: 20 }}>
            <input
                value={getvalue}
                onChange={(e) => setGetvalue(e.target.value)}
            />Input
            <div>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handle_RemoveItem_All}>Remove All</button>
            </div>
            <div>
                <ul>
                    {
                        submitt.map((x, i) => {
                            return (
                                <div style={{ display: 'flex' }}>
                                    <li key={i}>{x}</li>
                                    <button style={{ margin: 5 }}>Sửa</button>
                                    <button style={{ margin: 5 }} onClick={() => removeItem(x)}>Xóa</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
