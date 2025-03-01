import Projects from '@/components/projects/Projects'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects Page'
}


const ProjectsPage = () => {
  return <Projects />
}

export default ProjectsPage