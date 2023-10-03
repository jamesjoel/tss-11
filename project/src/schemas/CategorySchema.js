import * as YUP from 'yup';

let CateSchema = YUP.object({
    name : YUP.string().required("Insert Category Name")
})

export default CateSchema;