function handleOnclick(){
    console.log("hello");
}
function handlemouseOver(){
    console.log("bye")
}

function Button(){
    return(
        <div>
            <button onClick={handleOnclick}>submit</button>
            <p onMouseOver={handlemouseOver}>ncnksnnsnlsc cnknjdjsn kjncksdndn</p>
        </div>
    )
}
export default Button;