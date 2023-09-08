import MiniBox from "./MiniBox";
let Box = (props)=>{

    

    return(
        <div style={props.sty}>
            <h3>Name : {props.info.name}</h3>
            <h3>Age : { props.info.age}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit amet, voluptatum incidunt voluptates sunt, officiis distinctio ipsam inventore obcaecati vitae voluptate quos saepe dignissimos praesentium dolor ex nostrum! Soluta, aperiam.</p>
            <h2>City : { props.info.city }</h2>
            
            <h2>Gender : { props.info.gender }</h2>

            <MiniBox con = {props.info.contact} />

        </div>
    )
}

export default Box;