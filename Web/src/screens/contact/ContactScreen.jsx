import React from 'react'
import { Header } from '../../components'
import ContactForm from '../../components/contact-form/ContactForm'
import Section from '../../components/section/Section'

function ContactScreen() {
  return (
    <>
      <Header />
      
      <div className="container">
      <Section title="Contact"/>
      <ContactForm />
      </div>
    </>
  )
}

export default ContactScreen