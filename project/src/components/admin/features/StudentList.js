import React, {useEffect, useState} from 'react'
import { API } from '../../../util/API'
import axios from 'axios'


const StudentList = () => {

    let [allStu, setAllStu] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/student`).then(response=>{
            setAllStu(response.data);
        })
    }, [])


    let del = (obj) =>{
        // console.log(obj);
        let id = obj._id;
        axios.delete(`${API}/student/${id}`).then(response=>{
            console.log(response.data);
        })
    }
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                <table className='table table-secondary table-hover'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Fee</th>
                            <th>Class</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStu.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.fee}</td>
                                        <td>{value.class}</td>
                                        <td><button onClick={()=>del(value)} className='btn btn-danger btn-sm m-0'>Delete</button></td>
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

export default StudentList