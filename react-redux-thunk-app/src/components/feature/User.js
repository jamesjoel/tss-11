import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const User = () => {

    let navigate = useNavigate();

    let [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/user").then(response=>{
            setUser(response.data);
        })
    },[])

    let del = (obj)=>{
        axios.delete("http://localhost:8080/user/"+obj.id).then(response=>{
            setUser(()=>{
                return user.filter(value=>value.id != obj.id);
            })
        })
    }

    let update = (obj)=>{
        navigate("/user/update/"+obj.id);
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <NavLink to='/user/add' className='btn btn-info'>Add</NavLink>
                <h4>All User List</h4>
                <table className='table table-dark table-hover table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((value, index)=>{
                                return(
                                    <tr key={value.id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.email}</td>
                                        <td>{value.contact}</td>
                                        <td><button onClick={()=>del(value)} className='btn btn-danger'>Delete</button></td>
                                        <td><button onClick={()=>update(value)} className='btn btn-info'>Update</button></td>
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

export default User