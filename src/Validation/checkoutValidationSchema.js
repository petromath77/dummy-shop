import * as Yup from 'yup';

export const checkoutValidationSchema = Yup.object({
    name: Yup.string().min(3).required('Please Enter Name'),
    email: Yup.string().email('Please Enter Valid Email').required('Please Enter Email'),
    phone: Yup.string().matches(/^[1-9]\d{4}-[0-9]\d{2}-[0-9]\d{1}-[0-9]\d{1}$/, {message: "Please Enter Valid Number(Example: 12325-045-56-56).", excludeEmptyString: false}).required('Please Enter Phone Number'),
    adress: Yup.string().min(10).required('Please Enter Your Full Adress(Example: Folcroft, 700 Carpenters Crossing, BWW Ste 001)')

}); 