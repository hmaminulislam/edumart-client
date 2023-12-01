import React from 'react'
import CommonHero from '../../components/common/hero/CommonHero'
import ContactForm from '../../components/contact/contact-form/ContactForm'

export default function Contact() {
  return (
    <div>
      <CommonHero pageName={'Contact'} />
      <ContactForm/>
    </div>
  )
}
