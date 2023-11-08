import * as YUP from 'yup'

let PassSchema = YUP.object({
    current_pass : YUP.string().required("Insert Your Currnet Password"),
    new_pass : YUP.string().required("Insert New Password"),
    conf_pass : YUP.string().oneOf([YUP.ref('new_pass')], "New Password and Confirm New Password Should Be same").required("Insert Confirm New Password")
})

export default PassSchema;