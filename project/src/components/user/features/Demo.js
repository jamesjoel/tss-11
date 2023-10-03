import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Demo = () => {

    let [pro, setPro] = useState([]);
    let [loader, setLoader] = useState(false)
    
    useEffect(()=>{
        
        axios.get("https://fakestoreapi.com/products").then(response=>{
            console.log(response.data);
            setPro(response.data)
        
        })
    },[])
   

  return (
    <div className='container my-4' style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
               
                {
                    pro.length > 0 ? <table className='table table-dark my-4'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            pro.map((value, index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.price}</td>
                                        <td>{value.category}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> : <div className='alert alert-info my-4'>No Data Found</div>
                }
            </div>
        </div>
    </div>
  )
}

export default Demo