import ComC from './comC'
function ComB({ name }) {
    console.log("🙉🍀 __ nameB", name)
    return (
        <div>
            <ComC name={name} />
        </div>
    )
}

export default ComB
