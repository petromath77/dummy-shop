import React from 'react';

const Button = ({children, className, handler, type, disabled}) => {
  return (
    <button type={type} disabled={disabled} onClick={handler} className={`bg-slate-500 text-slate-100 ${className} rounded-md hover:bg-slate-400 ease duration-300`}>{children}</button>
  )
}

export default Button