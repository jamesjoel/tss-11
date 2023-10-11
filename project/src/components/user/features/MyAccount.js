import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const MyAccount = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("token"))
        {
            navigate("/login");
        }
    },[])
  return (
    <>
    <div className="container" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
                <h3>My - Account Page</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyAccount