import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

const Pagination = () => {

  let [pro, setPro] = useState([]);
  let [totalPro, setTotalPro] = useState(0); // 100
  let [perPagePro, setPerPagePro] = useState(20); // 20
  // let [pages, setPages] = useState(0);
  let ele = [];
  useEffect(()=>{
    axios.get("https://dummyjson.com/products?limit=100").then(response=>{
      setPro(response.data.products);
      setTotalPro(response.data.total);
      let pages = totalPro/perPagePro;
      
    
      for(let i = 1; i <= pages; i++)
      {
        ele.push(<li className='page-item'><NavLink className='page-link'>{i}</NavLink></li>)
      }
       
    })
  },[])

  

  


  return (
    <div className="container my3">
      <div className="row">
        <div className="col-md-12">
          <ul className='pagination my-3'>
            {
              ele
            }
          </ul>
          <table className='table table-dark my-3'>
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
                    <tr  key={value.id}>
                      <td>{index+1}</td>
                      <td>{value.title}</td>
                      <td>{value.price}</td>
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

export default Pagination