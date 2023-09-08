import Box from "./Box";
import MiniBox from "./MiniBox";
let Home = ()=>{

    let user1 = {
        name : "Amar Johi",
        age : 25,
        city : "mumbai",
        contact : 548578,
        gender : "male"
    }
    let user2 = {
        name : "Nidhi Verma",
        age : 20,
        city : "pune",
        contact : 500578,
        gender : "female"
    }
    let user3 = {
        name : "vijay",
        age : 27,
        city : "indore",
        contact : 666333,
        gender : "male"
    }
    let obj = {
        name : "Rehan",
        age : 22,
        city : "Mhow",
        contact : 100000,
        gender : "male"
    }

    let styles = {
        
        width : "300px",
        minHeight : "300px",
        float : "left",
        margin : "10px",
        border : "10px solid blue"
    }

    return(
        <>
            <MiniBox con={"00-00-00"} />
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores voluptatibus quas reprehenderit adipisci, doloribus, facere sequi quod ut iure odio neque cupiditate ducimus, velit quo quia. Praesentium, delectus id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptate quis. Cumque fugiat, vitae, optio ipsum eius adipisci modi, possimus sunt voluptates quae autem ducimus. Quae ab enim soluta eaque.</p>

            <Box sty = {styles} info={user1}/>
            <Box sty = {styles} info={user2}/>
            <Box sty = {styles} info={user3}/>
            <Box sty = {styles} info={obj}/>
        </>
    )
}

export default Home;