import React from 'react'

const FormInput = (props) => {
  return (
    <div className='flex flex-col mb-6'>
        <label className='mb-2 text-left text-slate-500 font-bold'>{props.placeholder}</label>
        {props.input === 'true' ?
            <input className='p-2 border-2 border-slate-400 rounded-md focus:border-slate-500 focus:outline-none' placeholder={props.placeholder} />
            :
            <textarea className='h-20 p-2 border-2 border-slate-400 rounded-md focus:border-slate-500 focus:outline-none resize-none' placeholder={props.placeholder} />
        }
        
    </div>
  )
}

export default FormInput