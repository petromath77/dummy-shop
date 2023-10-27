import React from 'react';

const Overlay = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center absolute top-0 left-0 w-full h-full bg-gray-900/20 text-slate-50 z-9'>
        <div className='px-4 -mt-8 drop-shadow-2xl text-left'>
            <h1 className='heading-1 mb-4'>{title}</h1>
            <h3 className='heading-3'>{subtitle}</h3>
        </div>
    </div>
  )
}

export default Overlay