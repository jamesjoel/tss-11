import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserInfo = () => {
    let param = useParams();
    let [user, setUser] = useState({});

    useEffect(()=>{
        let id = param.id;
        axios.get("https://jsonplaceholder.typicode.com/users/"+id).then(response=>{
            setUser(response.data);
        })

    },[])



  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-6'>
                <h4>User Detail</h4>
                <p>Name : {user.name}</p>
            </div>
        </div>
    </div>
  )
}

export default UserInfo