import { Field } from 'formik';

const FormInput = ({placeholder, type, view, name}) => {
  return (
    <div className='flex flex-col mb-6'>
        <label className='mb-2 text-left text-slate-500 font-bold'>{placeholder}</label>
        {view === 'input' && <Field className='p-2 border-2 border-slate-400 rounded-md focus:border-slate-500 focus:outline-none' type={type} name={name} placeholder={placeholder} />}
        {view === 'textarea' && <Field component="textarea" rows="4" className='p-2 border-2 border-slate-400 rounded-md focus:border-slate-500 focus:outline-none resize-none' type={type} name={name} placeholder={placeholder} />}
        
    </div>
  )
}

export default FormInput