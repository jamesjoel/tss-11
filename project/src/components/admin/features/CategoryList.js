import React, {useState, useEffect, useRef} from 'react'
import {API} from '../../../util/API'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const CategoryList = () => {

  let navigate = useNavigate();
  let closeBtn = useRef();

  let [allCate, setAllCate] = useState([]);
  let [cate, setCate] = useState({});

  useEffect(()=>{
    axios.get(`${API}/category`).then(response=>{
      setAllCate(response.data);
    })
  }, [])

  let askEdit = (obj)=>{
    navigate("/admin/edit-category/"+obj._id);
  }
  let confDelete = ()=>{
    axios.delete(`${API}/category/`+cate._id).then(response=>{
      setAllCate(()=>{
        return allCate.filter(value=> value._id != cate._id);
      })
      closeBtn.current.click();
    })
  }

  let askDelete = (obj)=>{
    setCate(obj);
  }

  return (
    <>
    <div className='container my-5'>
        <div className='row'>
            <div className="col-md-8 offset-md-2">
              <table className='table table-secondary table-hover table-striped table-brodered'>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Category Name</th>
                    <th>Edit</th>
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
                          <td><button onClick={()=>askEdit(value)} className='btn btn-sm btn-info m-0'>Edit</button></td>
                          <td><button data-bs-toggle="modal" data-bs-target="#delModal" onClick={()=>askDelete(value)} className='btn btn-sm btn-danger m-0'>Delete</button></td>
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
          <div className='modal-header'>Delete Category</div>
          <div className='modal-body'>
            <p>Are You sure want to delete {cate ? <b>{cate.name}</b> : ''}  Category</p>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-dark' ref={closeBtn} data-bs-dismiss="modal">Close</button>
            <button className='btn btn-danger' onClick={confDelete}>Delete</button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default CategoryList