import FormInput from '../UI/FormInput';
import Section from '../UI/Section';
import Button from '../UI/Button';


const Contacts = () => {
  return (
    <Section>
      <h2 className='heading-2'>Contact Us</h2>
      <form className='max-w-xs mx-auto mt-12'>
        <FormInput input="true" placeholder="Name" />
        <FormInput input="true" placeholder="Email" />
        <FormInput input="false" placeholder="Message" />
        <Button className='w-full px-3 py-3 mt-2 font-bold'>Send</Button>
      </form>
    </Section>
  )
}

export default Contacts