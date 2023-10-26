import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {API} from '../../../util/API'

const CategoryList = () => {
    let [allCate, setAllCate] = useState([]);
    let [cate, setCate] = useState({});

    let x = useRef();

    useEffect(()=>{
        axios.get(`${API}/category`).then(response=>{
            //console.log(response.data);
            setAllCate(response.data);
        })
    }, [])

    let askDelete = (obj)=>{
        setCate(obj);
    }

    let confDelete = ()=>{
        axios.delete(`${API}/category/${cate._id}`).then(response=>{
            // console.log(response.data);
            // 1. delete from server
            x.current.click(); //2. popup closed
            // 3. delete here
            setAllCate(()=>{
                return allCate.filter(value => value._id != cate._id);
            })

        })
    }

  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Category Name</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            allCate.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td><button onClick={()=>askDelete(value)} data-bs-toggle="modal" data-bs-target="#delModal" className='btn btn-sm btn-danger m-0'>Delete</button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    

    </div>

    <div className='modal fade' id='delModal'>
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4>Delete Category</h4>
                </div>
                <div className='modal-body'>
                    <p>Are Your Sure Want to Delete <b>{ cate ? cate.name : '' }</b> Category !</p>
                </div>
                <div className='modal-footer'>
                    <button ref={x} data-bs-dismiss="modal" className='btn btn-secondary btn-sm'>Close</button>
                    <button className='btn btn-danger btn-sm' onClick={confDelete}>Delete</button>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default CategoryList