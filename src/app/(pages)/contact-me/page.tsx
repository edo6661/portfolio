import Contact from '@/components/contact/Contact'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Contact Me Page'
}

const ContactPage = () => {
  return <Contact />
}


export default ContactPage