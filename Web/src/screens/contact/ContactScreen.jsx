import React from 'react'
import { Header } from '../../components'
import ContactForm from '../../components/contact-form/ContactForm'
import contactpic from "../../images/contact-pic.png";


function ContactScreen() {
  return (
    <>
      <Header />
      <div><img src={contactpic} alt="xan-campos" className="position-relative" />
      <div class="position-absolute top-50 start-50 translate-middle"><ContactForm /></div>
      
      </div>
      
    </>
  )
}

export default ContactScreen