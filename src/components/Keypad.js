// Code Keypad Component Here

function handleChange(event){
    console.log("Entering password...")

}

function Keypad (){
    return (
        <div>
            <form>
                <input type="password" onChange={handleChange}/>
            </form>
            
        </div>
    )
}

export default Keypad;