import React from 'react'

const Error = ({errors}) => {
  return (
    <small className='relative -top-3 text-red-600'>*{errors}</small>
  )
}

export default Error