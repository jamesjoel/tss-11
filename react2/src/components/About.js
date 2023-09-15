import React, {useState} from 'react'
// import { useState } from 'react'

const About = () => {

    // now "a" is a STATE
    let [a, b] = useState(1000); // the useState() return a array which have 2 values

    let [name, changeName] = useState("rohit");

    // right now "a" is a variable
    // let a = 10;


    let demo = ()=>{
      b(2000);
      changeName("amar");
    }

    let demo2 = ()=>{

      b("The Stepping Stone");
    }

  return (
    <>
        <div>About</div>
        <h1>{ a }</h1>
        <h1>{ name }</h1>
        <button onClick={demo}>OK</button>
        <button onClick={demo2}>Hello</button>
    </>
  )
}

export default About