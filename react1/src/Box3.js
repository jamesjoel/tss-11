import Box4 from "./Box4";

let Box3 = ()=>{
 
    let name = "Jaya";
    let age = 24;

    return(
        <>
            <div style={{ backgroundColor : "#FFF", height : "400px", width : "600px" }}>
                    <h1>This is Main Compoent</h1>

                    <Box4 test={name} age={age}/>
            </div>
        </>
    )
}

export default Box3;