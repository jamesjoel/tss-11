import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../../../util/API'

const CategoryList = () => {
    let [allCate, setAllCate] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/category`).then(response=>{
            //console.log(response.data);
            setAllCate(response.data);
        })
    }, [])

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allCate.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
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

export default CategoryList