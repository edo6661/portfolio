"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export type Tech = "React" | "Vue" | "Flutter" | "Kotlin" | "Typescript" | "NextJS"
const techs: Tech[] = ["React", "Vue", "Flutter", "Kotlin", "Typescript", "NextJS"]
export type ProjectTech = {
  image: string
  title: string
}

const projectTech: Record<Tech, ProjectTech> = {
  React: {
    image: "icons/techs/react.svg",
    title: "React"
  },

  Vue: {
    image: "icons/techs/vue.svg",
    title: "Vue"
  },
  Flutter: {
    image: "icons/techs/flutter.svg",
    title: "Flutter"
  },
  Kotlin: {
    image: "icons/techs/filled/kotlin.svg",
    title: "Kotlin"
  },
  Typescript: {
    image: "icons/techs/filled/typescript.svg",
    title: "Typescript"
  },
  NextJS: {
    image: "icons/techs/filled/nextjs.svg",
    title: "NextJS"
  }
}

export type Project = {
  image: string
  title: string
  tech: Tech[]
  description: string
  url?: string
  githubUrl: string
}
const initialProjects: Project[] = [
  {
    image: "images/projects/nike.png",
    title: "Nike Clone",
    tech: ["React", "Typescript", "NextJS"],
    description: "This is a project description",
    url: "https://nike-clone-static.vercel.app/",
    githubUrl: "https://github.com/edo6661/nike-clone-static",
  },
];

const initialTechs: Tech[] = ["React", "Vue", "Flutter", "Kotlin", "Typescript"]


const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<Tech[]>(initialTechs)
  const [projects, setProjects] = useState<Project[]>(initialProjects)

  const onChangeTech = (tech: Tech) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech))
    } else {
      setSelectedTech([...selectedTech, tech])
    }
  }
  const filteredProjects = projects.filter((project) => {
    return project.tech.some((tech) => selectedTech.includes(tech))
  }
  )

  return (
    <div className='text-secondary flex md:flex-row flex-col md:flex-1 min-h-[620px] items-stretch'>
      <LeftSection
        selectedTech={selectedTech}
        onChangeTech={onChangeTech}
      />
      <RightSection />
    </div>
  )
}

const LeftSection = (
  { selectedTech, onChangeTech }: {
    selectedTech: Tech[]
    onChangeTech: (tech: Tech) => void
  }
) => {
  const isActive = (tech: Tech) => selectedTech.includes(tech)
  return (
    <div className='flex flex-col min-w-[200px] border-r border-line '>
      <div className='flex gap-2 items-center px-4 py-2 border-b border-line w-full'>
        <Image
          src="icons/arrow.svg"
          alt="Arrow"
          width={12}
          height={12}
          style={{
            width: 12,
            height: 12,
          }}
        />
        <span className='text-secondary-white'>
          projects
        </span>
      </div>
      <div className='space-y-4 px-4 py-2'>
        {techs.map((tech) => (
          <div key={tech} className='flex items-center gap-2'>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <input type='checkbox'
                  checked={isActive(tech)}
                  onChange={() => onChangeTech(tech)}
                />
                <Image
                  src={projectTech[tech].image}
                  alt={projectTech[tech].title}
                  width={20}
                  height={20}
                />
              </div>
              <span className={`text-sm ${isActive(tech) ? 'text-secondary-white' : 'text-secondary'}`}>
                {projectTech[tech].title}
              </span>

            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

const RightSection = () => {
  return (
    <div className='flex flex-col flex-1 min-h-full '>
      <div className='flex gap-2 items-center border-b border-line'>
        <span className='px-4 py-2'>
          all;
        </span>
      </div>
      <div>

      </div>
    </div>

  )
}

export default Projects