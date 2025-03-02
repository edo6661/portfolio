"use client"
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import GithubCorner from './GithubCorner'

export type Tech = "React" | "Vue" | "Flutter" | "Kotlin" | "Typescript" | "NextJS"
const techs: Tech[] = ["React", "Vue", "Flutter", "Kotlin", "Typescript", "NextJS"]
export type ProjectTech = {
  image: string
  title: string
  imageFilled: string
}

const projectTech: Record<Tech, ProjectTech> = {
  React: {
    image: "icons/techs/react.svg",
    imageFilled: "icons/techs/filled/react.svg",
    title: "React"
  },

  Vue: {
    image: "icons/techs/vue.svg",
    imageFilled: "icons/techs/filled/vue.svg",
    title: "Vue"
  },
  Flutter: {
    image: "icons/techs/flutter.svg",
    imageFilled: "icons/techs/filled/flutter.svg",
    title: "Flutter"
  },
  Kotlin: {
    image: "icons/techs/kotlin.svg",
    imageFilled: "icons/techs/filled/kotlin.svg",
    title: "Kotlin"
  },
  Typescript: {
    image: "icons/techs/typescript.svg",
    imageFilled: "icons/techs/filled/typescript.svg",
    title: "Typescript"
  },
  NextJS: {
    image: "icons/techs/nextjs.svg",
    imageFilled: "icons/techs/filled/nextjs.svg",
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
    image: "/images/projects/nike.png",
    title: "Nike Clone",
    tech: ["React", "Typescript", "NextJS"],
    description: "This is a project description",
    url: "https://nike-clone-static.vercel.app/",
    githubUrl: "https://github.com/edo6661/nike-clone-static",
  },
  {
    image: "/images/projects/nike.png",
    title: "Nike Clone",
    tech: ["React", "Typescript", "NextJS"],
    description: "This is a project description",
    url: "https://nike-clone-static.vercel.app/",
    githubUrl: "https://github.com/edo6661/nike-clone-static",
  },
  {
    image: "/images/projects/nike.png",
    title: "Nike Clone",
    tech: ["React", "Typescript", "NextJS"],
    description: "This is a project description",
    url: "https://nike-clone-static.vercel.app/",
    githubUrl: "https://github.com/edo6661/nike-clone-static",
  },
];

const initialTechs: Tech[] = ["React", "Vue", "Flutter", "Kotlin", "Typescript", "NextJS"]


const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<Tech[]>(initialTechs)
  const [projects] = useState<Project[]>(initialProjects)

  const onChangeTech = (tech: Tech) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech))
    } else {
      setSelectedTech([...selectedTech, tech])
    }
  }
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return project.tech.some((tech) => selectedTech.includes(tech))
    })
  }, [projects, selectedTech])
  const allSelected = useMemo(() => selectedTech.length === techs.length, [selectedTech])
  const onAllSelected = () => {
    if (allSelected) {
      setSelectedTech([])
    } else {
      setSelectedTech(techs)
    }
  }


  return (
    <div className='text-secondary flex md:flex-row flex-col md:flex-1 min-h-[620px] items-stretch'>
      <LeftSection
        selectedTech={selectedTech}
        onChangeTech={onChangeTech}
        allSelected={allSelected}
        onAllSelected={onAllSelected}
      />
      <RightSection
        filteredProjects={filteredProjects}

      />
    </div>
  )
}

const LeftSection = (
  { selectedTech, onChangeTech,
    allSelected, onAllSelected

  }: {
    selectedTech: Tech[]
    onChangeTech: (tech: Tech) => void,
    allSelected: boolean,
    onAllSelected: () => void
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
      <div className='space-y-4 px-4 py-2 md:border-none border-b border-line'>
        <div className='flex items-center gap-2'>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <input type='checkbox'
                checked={allSelected}
                onChange={onAllSelected}
                id='all'
              />


            </div>
            <label
              htmlFor='all'
              className={`text-sm ${allSelected ? 'text-secondary-white' : 'text-secondary'}`}>
              All
            </label>

          </div>
        </div>
        {techs.map((tech, i) => (
          <TechCheckbox
            key={i}
            image={projectTech[tech].image}
            isActive={isActive}
            onChangeTech={onChangeTech}
            tech={tech}

          />

        ))}
      </div>
    </div>

  )
}

export const TechCheckbox = (
  { image, tech, isActive, onChangeTech }: {
    image: string,
    tech: Tech,
    isActive: (tech: Tech) => boolean,
    onChangeTech: (tech: Tech) => void
  }

) => {
  return <div className='flex items-center gap-2'>
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-2">
        <input type='checkbox'
          id={tech}
          checked={isActive(tech)}
          onChange={() => onChangeTech(tech)}
        />
        <Image
          src={image}
          alt={tech}
          width={20}
          height={20}
        />
      </div>
      <label
        htmlFor={tech}
        className={`text-sm ${isActive(tech) ? 'text-secondary-white' : 'text-secondary'}`}>
        {tech}
      </label>

    </div>
  </div>


}
const RightSection = (
  { filteredProjects }: {
    filteredProjects: Project[]
  }
) => {
  const isNotEmpty = filteredProjects.length > 0;
  return (
    <div className='flex flex-col flex-1 min-h-full '>
      <div className='md:flex hidden gap-2 items-center border-b border-line'>
        <span className='px-4 py-2'>
          all;
        </span>
      </div>

      {isNotEmpty && (
        <div className={`flex flex-wrap px-6 py-4 gap-8 ${!isNotEmpty ? 'flex-1 justify-center items-center' : 'justify-around'}`}
        >
          {filteredProjects.map((project, i) =>
            <div key={i} className='border-line bg-primary-light border rounded-md relative'>
              <GithubCorner
                url={project.githubUrl}
              />
              <div className='absolute top-0 left-0 text-secondary-white rounded-bl-md px-2 py-1 space-y-4 rounded-tl-md rounded-br-md '
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
              >
                {project.tech.map((tech, i) => (
                  <Image
                    key={i}
                    src={projectTech[tech].imageFilled}
                    width={24}
                    height={24}
                    alt={projectTech[tech].title}
                  />
                ))}
              </div>
              <Image
                src={project.image}
                width={200}
                height={200}
                className='w-full object-cover rounded-md'
                alt={project.title}
              />
              <div className='flex flex-col gap-4 py-6 px-4'>
                <div className="flex flex-col gap-2">
                  <span>
                    {project.title}
                  </span>
                  <span className='text-xs font-thin'>
                    {project.description}
                  </span>
                </div>
                <a target='_blank' href={project.url}
                  className='bg-[#1C2B3A] block text-secondary-white rounded-sm text-center py-2 px-4 hover:bg-[#263B50] transition-colors duration-300 w-fit'
                >
                  view-project
                </a>

              </div>


            </div>
          )}
        </div>

      )}

      {!isNotEmpty && (
        <div className='flex flex-col items-center justify-center flex-1 '

        >
          <span className='text-secondary'>
            No projects found
          </span>
        </div>
      )}
    </div>

  )
}

export default Projects