import { useState } from 'react';
import Button from '../UI/Button';
import Error from '../UI/Error';
import FormInput from '../UI/FormInput';
import { checkoutValidationSchema } from '../Validation/checkoutValidationSchema';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/CartSlice';
import WatchSpinner from '../UI/WatchSpinner';

const CheckoutForm = () => {
    const [sended, setSended] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        adress: '',
    };

    const dispatch = useDispatch();

    const navigate = useNavigate();

  return (
    <>
    <Formik
        initialValues= {initialValues}
        validationSchema = {checkoutValidationSchema}
        onSubmit={(values, {resetForm}) => {
            setSended(true);
            setTimeout(() => {
                resetForm({values: ''});
                setSended(false);
                navigate('/thanks');
                dispatch(clearCart());
              }, 3000);
        
        }}
    >   
        {({errors}) => (
            <Form className='max-w-xs mx-auto mt-10 text-left'>
                <FormInput view="input" type="text" name="name" placeholder="Name" />
                {errors.name && <Error errors={errors.name} />}
                <FormInput view="input" type="email" name="email" placeholder="Email" />
                {errors.email && <Error errors={errors.email} />}
                <FormInput view="input" type="tel" name="phone" placeholder="Phone" />
                {errors.phone && <Error errors={errors.phone} />}
                <FormInput view="textarea" type="text" name="adress" placeholder="Full Adress" />
                {errors.adress && <Error errors={errors.adress} />}
                <Button type='submit' disabled={Object.keys(errors).length > 0} className='w-full px-3 py-3 mt-2 font-bold'>Order</Button>
                {sended && <WatchSpinner />}
            </Form>
        )}
    </Formik>
</>
  )
}

export default CheckoutForm