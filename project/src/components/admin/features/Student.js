import { useFormik } from 'formik'
import axios from 'axios'
import {API} from '../../../util/API';
import {useNavigate} from 'react-router-dom'
const Student = () => {

    let navigate = useNavigate();

    let stuFrm = useFormik({
        initialValues : {
            name : "",
            fee : "",
            class : ""
        },
        onSubmit : (formdata)=>{
            axios.post(`${API}/student`, formdata).then(response=>{
                // console.log(response.data);
                navigate("/admin/student-list");
            })
        }
    })

  return (
    <div className="container my-5">
        <div className="row">
            <form onSubmit={stuFrm.handleSubmit}>
            <div className="col-md-6 offset-md-3">
                <label>Full Name</label>
                <input name='name' onChange={stuFrm.handleChange} type="text" className="form-control" /> 
                <label>Fee</label>
                <input name='fee' onChange={stuFrm.handleChange} type="text" className="form-control" /> 
                <label>Class</label>
                <input name='class' onChange={stuFrm.handleChange} type="text" className="form-control" /> 
                <br />
                <input type="submit" className="btn btn-primary" />
            </div>
            </form>
        </div>
    </div>
  )
}

export default Student