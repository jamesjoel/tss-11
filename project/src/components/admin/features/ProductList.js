import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API } from '../../../util/API'


const ProductList = () => {

  let [product, setProduct] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/product`).then(response=>{
      setProduct(response.data);
    })
  },[])

  return (
    <div className="container mt-5" style={{minHeight : "600px"}}>
      <div className="row">
        <div className="col-md-12">
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {
                product.map((value, index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{value.title}</td>
                      <td>{value.category}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>  
  )
}

export default ProductList