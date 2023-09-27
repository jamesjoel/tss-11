import * as YUP from 'yup';

const signupSchema = YUP.object({
    name : YUP.string().required("Insert Your Full Name").test("demo", "First Letter should be capital", (value)=>{
        let nameArr = value.split(""); // Gaurav
        if(nameArr[0].toUpperCase() === nameArr[0])
        {
            return true;
        }else{
            return false;
        }
    }),
    email : YUP.string().email("This Email Id is Invalid").required("Insert Your Email Id"),
    password : YUP.string().required("Insert Your Password"),
    repassword : YUP.string().oneOf([YUP.ref('password')], "Password and Re-Password should be same").required("Insert Your Re-Password"),
    contact : YUP.number().typeError("Insert Number Only").min("1000000000", "Contact Number Should be more then 10 digit").max("9999999999999", "Contact Number should be less then 13 digit").required("Insert Your Contact Number"),
    address : YUP.string().required("Insert Your Full Address"),
    city : YUP.string().required("Select Your City"),
    gender : YUP.string().required("Select Your Gender"),
})

export default signupSchema;