import React from 'react'

const Home = () => {

  let a = "Rohit";

  let num = 100;

  let color = ["red", "green", "blue", "yellow"]

  let user = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "amar",
      age : 20,
      city : "pune"
    },
    {
      name : "gaurav",
      age : 21,
      city : "mumbai"
    }
  ]
  

  return (
    
    <>
      <div className='container my-4'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>

              {
                  user.length > 0 ?(
              

              <table className='table table-dark'>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    user.map((value, index)=>{
                      return(
                        <>
                          <tr>
                            <td>{index+1}</td>
                            <td>{ value.name }</td>
                            <td>{ value.age }</td>
                            <td>{ value.city }</td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
                  ) : (
                    <div className='alert alert-danger'>No Data Found</div>
                  )
              }   
            </div>
          </div>
      </div>    
      
      
    </>
  )
}

export default Home;