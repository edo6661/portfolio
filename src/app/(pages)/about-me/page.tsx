import About from '@/components/about/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Me Page'
}



const AboutPage = () => {
  return <About />

}



export default AboutPage