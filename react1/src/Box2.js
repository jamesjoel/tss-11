let Box2 = ()=>{

    let x = "Rohit";    
    let y = "Amar";

    let m = { 
                backgroundColor : "#ACDCD1", 
                width : "300px", 
                height : "300px" 
        }
    

    let mystyle = {
        color : "white",
        fontSize : "20px"
    }    
    return(
        <div style={ m }>
            <h1>{ x }</h1>
            <h2>The Stepping Stone</h2>

            <h3 style={{backgroundColor : "red"}}>{ y }</h3>

            <p style={ mystyle }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quas impedit ad consequatur rerum esse ipsa. Eius adipisci assumenda sed corrupti ullam odit reprehenderit esse, nostrum dolorem saepe quis tempore?</p>


            
        </div>
    )
}

export default Box2;