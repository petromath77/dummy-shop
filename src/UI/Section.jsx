import React from 'react';

const Section = ({children, props}) => {
  return (
    <section  {...props} className="w-full mx-auto max-w-5xl px-4 py-16">
        {children}
    </section>
  )
}

export default Section