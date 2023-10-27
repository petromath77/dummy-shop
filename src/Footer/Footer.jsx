import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-4 bg-slate-400">
        <div className="flex justify-between w-full mx-auto max-w-5xl px-4">
          <div>&#169; 2023 All rights reserved</div>
          <a className='font-bold' href="https://fakestoreapi.com/" target="_blank" rel="noreferrer">API</a>
        </div>
    </footer>
  )
}

export default Footer