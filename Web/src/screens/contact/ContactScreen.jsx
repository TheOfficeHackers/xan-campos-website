import React from 'react'
import { CoverPicture, Header, ScrollButton } from '../../components'
import ContactForm from '../../components/contact-form/ContactForm'




function ContactScreen() {
  return (
    <>
      <Header color="light"/>
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666372245/xan-campos-web/contact-pic-def_pb1xvn.png"/>
      <ScrollButton />
      <div class="position-absolute top-50 start-50 translate-middle"><ContactForm /></div>
    </>
  )
}

export default ContactScreen