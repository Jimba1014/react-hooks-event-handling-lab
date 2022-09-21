// Code EyesOnMe Component Here

function addFocus(){
    console.log("Good!")
}
function addBlur(){
    console.log("Hey! Eyes on me!")
}


function EyesOnMe(){
    return (
        <button onClick={addFocus}>Eyes on me</button>
    )
}

export default EyesOnMe