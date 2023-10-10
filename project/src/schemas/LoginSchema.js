import * as YUP from 'yup';

let loginSchema = YUP.object({
    username : YUP.string().email("Please Insert Correct Email Id").required("Insert Your Username/Email Id"),
    password : YUP.string().required("Insert Your Password")
})

export default loginSchema;