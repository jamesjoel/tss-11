import axios from 'axios'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
let User = ()=>{

    let navigate = useNavigate();
    let [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            setUser(response.data);
        })
    },[])

    let getInfo = (obj)=>{
        navigate("/userinfo/"+obj.id);
    }

    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <h4>List of All User</h4>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((value, index)=>{
                                    return(
                                        <tr key={value.id}>
                                            <td>{index+1}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address.city}</td>
                                            <td><button onClick={()=>getInfo(value)} className='btn btn-info'>More</button></td>
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

export default User;