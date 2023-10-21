import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { API } from '../../../util/API';

const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/users`).then(response=>{
            setUsers(response.data);
        })
    }, [])


    let changeStatus = (obj)=>{
        
        let id = obj._id;
        let status = obj.status;
        let {...newobj} = obj;
        if(newobj.status==1){
            newobj.status = 0
        }
        else{
            newobj.status=1;
        }     
        
        axios.get(`${API}/users/changestatus/${id}/${status}`).then(response=>{
            
            setUsers(()=>{
                return users.map((value)=>{
                    if(value._id == newobj._id){
                        return newobj;
                    }else{
                        return value;
                    }
                })
            })
        })
    }

  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <h4 className='text-center'>All Users List</h4>
                    <table className="table table-dark table-hover table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((value, index)=>{
                                    return(
                                        <tr key={value._id}>
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.contact}</td>
                                            <td><button onClick={()=>changeStatus(value)} className='btn btn-sm btn-light'>{value.status==1 ? 'Acitve' : 'Deactive'}</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Users

/*

    let a = 10;

    if(a == 10)
    {
        a = 20;
    }
    if(a == 20){
        a = 10
    }



*/