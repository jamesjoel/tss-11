import Box from "./Box";
import MiniBox from "./MiniBox";
const Home = ()=>{
    let styles = {
        backgroundColor : "#7ACDD1",
        width : "90%",
        height : "700px",
        padding : "20px"

    }

    let obj = {
        a : "Indore",
        b : "Mumbai",
        c : "Pune",
        d : "Bhopal"
    }


    let demo = {
        d : "The Stepping Stone"
    }
    return(
        <div style={styles}>
            <MiniBox pqr={demo}/>

            <h1>Home</h1>
            <h4>{ obj.a }</h4>
            <Box xyz = {obj}/>
        </div>
    )
}

export default Home;