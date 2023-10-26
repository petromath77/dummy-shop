import { useState } from 'react';
import Button from '../UI/Button';
import Error from '../UI/Error';
import FormInput from '../UI/FormInput';
import { contactValidationSchema } from '../Validation/contactValidationSchema';
import { Formik, Form } from 'formik';

const ContactForm = () => {
    const [sended, setSended] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

  return (
    <>
        <Formik
            initialValues= {initialValues}
            validationSchema = {contactValidationSchema}
            onSubmit={(values, {resetForm}) => {
                resetForm({values: ''});
                setSended(true);
                setTimeout(() => {
                    setSended(false);
                  }, 3000);
            
            }}
        >   
            {({errors}) => (
                <Form className='max-w-xs mx-auto mt-12 text-left'>
                    <FormInput view="input" type="text" name="name" placeholder="Name" />
                    {errors.name && <Error errors={errors.name} />}
                    <FormInput view="input" type="email" name="email" placeholder="Email" />
                    {errors.email && <Error errors={errors.email} />}
                    <FormInput view="textarea" type="text" name="message" placeholder="Message" />
                    {errors.message && <Error errors={errors.message} />}
                    <Button type='submit' disabled={Object.keys(errors).length > 0} className='w-full px-3 py-3 mt-2 font-bold'>Send</Button>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default ContactForm