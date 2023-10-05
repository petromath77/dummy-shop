import React from 'react'

const Button = ({children, props, addProduct}) => {
  return (
    <button onClick={addProduct} {...props} className="bg-slate-500 text-slate-100 px-4 py-2 mt-4 rounded-md hover:bg-slate-400 ease duration-300">{children}</button>
  )
}

export default Button