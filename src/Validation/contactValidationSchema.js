import * as Yup from 'yup';

export const contactValidationSchema = Yup.object({
    name: Yup.string().min(3).required('Please Enter Name'),
    email: Yup.string().email('Please Enter Valid Email').required('Please Enter Email'),
    message: Yup.string().min(10).required('Please Enter Your Message')

}); 