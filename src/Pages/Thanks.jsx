import { Link } from 'react-router-dom';
import Section from '../UI/Section';

const Thanks = () => {
  return (
    <Section>
        <h2 className='heading-2'>Thank You For Order!</h2>
        <Link className='block mt-8 font-bold underline hover:no-underline' to='/products'>Back To Products</Link>
    </Section>
  )
}

export default Thanks