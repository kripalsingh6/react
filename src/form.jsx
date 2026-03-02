
function Formhandler(event){
    event.preventDefault();
    console.log("form submitted");
}

export default function HandleForm(){
    return(
        <form onSubmit={Formhandler}>
            <input type="text" placeholder="wright here" />
            <button>submit</button>
        </form>
    )
}