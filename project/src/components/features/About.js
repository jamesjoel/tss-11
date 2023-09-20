import React, {useState} from 'react'

const About = () => {
  // let a = 100;

  let [a, setA] = useState(0);

  let demo1 = ()=>{
    setA(()=>{
      let b = a + 1;
      return b;
    });
  }
  let demo2 = ()=>{
    setA(()=>{
      let b = a - 1;
      return b;
    });
  }

  return (
    <>
    <div className="container-fluid py-5" style={{minHeight : "700px"}}>
        <div className="container">
            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 className="text-primary mb-3"><span className="fw-light text-dark">About</span> Us</h1>
                <p className="mb-5">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, optio, dolores voluptas autem voluptatum voluptates recusandae quisquam est hic, quidem officiis voluptatibus molestias praesentium nemo necessitatibus tempora nostrum excepturi nesciunt? consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
        </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button onClick={demo1}>+</button>
          <button onClick={demo2}>-</button>
            <h1>{a}</h1>
        </div>
      </div>
    </div>
    </>

  )
}

export default About