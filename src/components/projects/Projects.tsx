"use client"
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import GithubCorner from './GithubCorner'

export type Tech = "React" | "Vue" | "Flutter" | "Kotlin" | "Typescript" | "NextJS" | "CSS"
const techs: Tech[] = ["React", "Vue", "Flutter", "Kotlin", "Typescript", "NextJS", "CSS"]
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
  },
  CSS: {
    image: "icons/techs/css.svg",
    imageFilled: "icons/techs/filled/css.svg",
    title: "CSS"
  }
}

export type Project = {
  image: string
  title: string
  tech: Tech[]
  description: string
  url?: string
  githubUrl: string,
  urlImagesDrive?: string
}
const initialProjects: Project[] = [
  {
    image: "/images/projects/edawg/nike-clone/1.jpg",
    title: "Nike Clone",
    tech: ["React", "CSS", "Typescript", "NextJS"],
    description: "A static clone of the Nike website",
    url: "https://nike-clone-static.vercel.app/",
    githubUrl: "https://github.com/edo6661/nike-clone-static",
    urlImagesDrive: "https://drive.google.com/drive/folders/1NmTYghLkBuWG_exuR3lVoSBxj4cGTw0q",
  },
  {
    image: "/images/projects/edawg/film-kotlin/1.png",
    title: "App TMDB Movies",
    tech: ["Kotlin"],
    description: "A movie app using the TMDB API",
    url: "https://github.com/edo6661/Movies_Android",
    githubUrl: "https://github.com/edo6661/Movies_Android",
    urlImagesDrive: "https://drive.google.com/drive/folders/1PdC3TsjJ9Nl_yGLbLAid5SZcCJNFW6Cn",
  },
  {
    image: "/images/projects/edawg/bcf/1.jpg",
    title: "Lead Indonesia",
    tech: ["Kotlin"],
    description: "Bangkit Capstone Project, Bakrie Center Foundation",
    url: "https://github.com/edo6661/bcf",
    githubUrl: "https://github.com/edo6661/bcf",
    urlImagesDrive: "https://drive.google.com/drive/folders/1W-wPTX5ASvQ7yHk1EIgY7hrHuUlaJb_y",
  },
  {
    image: "/images/projects/edawg/anime/1.jpg",
    title: "Anime",
    tech: ["React", "CSS", "Typescript"],
    description: "An anime app using the Jikan API",
    url: "https://animebyaku-v1.vercel.app/",
    githubUrl: "https://github.com/edo6661/animebyaku-v1-verceled",
    urlImagesDrive: "https://drive.google.com/drive/folders/1cMyA6MFTTHeZTaZ3yetVmvSFCZ7EAtpG",
  },
  {
    image: "/images/projects/edawg/chat/1.jpg",
    title: "Chat Landing Page",
    tech: ["CSS"],
    description: "A static landing page for a chat consultan",
    url: "https://chat-app-vanilla.vercel.app/",
    githubUrl: "https://github.com/edo6661/chat-app-vanilla1",
    urlImagesDrive: "https://drive.google.com/drive/folders/1jHC4WpqMK-uXcAdyEgAQ-haWY0V5olZ7",
  },
  {
    image: "/images/projects/edawg/country/1.jpg",
    title: "Find Country",
    tech: ["CSS", "NextJS", "React", "Typescript"],
    description: "A simple country app using the Rest Countries API",
    url: "https://country-ruby.vercel.app/",
    githubUrl: "https://github.com/edo6661/country",
    urlImagesDrive: "https://drive.google.com/drive/folders/1xnJ_KF3L3UHrbSerUptETO3dCcnC2qbh",
  },

  {
    image: "/images/projects/edawg/film-web/1.jpg",
    title: "Web TMDB Movies",
    tech: ["CSS", "React", "Typescript"],
    description: "A movie web using the TMDB API",
    url: "https://moviebyaku-v1.vercel.app/",
    githubUrl: "https://moviebyaku-v1.vercel.app/",
    urlImagesDrive: "https://drive.google.com/drive/folders/1hxEVQIm-0tIiJCKRyTsKEclBYC18W3oN",
  },
  {
    image: "/images/projects/edawg/herbs/1.jpg",
    title: "Herbs Landing Page",
    tech: ["CSS"],
    description: "A static landing page for a herbs",
    url: "https://herbs-self.vercel.app/",
    githubUrl: "https://github.com/edo6661/herbs",
    urlImagesDrive: "https://drive.google.com/drive/folders/1uiczCe9zc5hmeKNXUvJmAkfi3eVQNfWL",
  },
  {
    image: "/images/projects/edawg/wma/1.jpg",
    title: "Paint Car",
    tech: ["Flutter"],
    description: "Paint Car is a mobile application for painting cars",
    url: "https://github.com/Rizz404/car_paint_client",
    githubUrl: "https://github.com/Rizz404/car_paint_server",
    urlImagesDrive: "https://drive.google.com/drive/folders/1MhZjOzsiq0awdpb0zRQ2x6aw15qRHxvR",
  },
  {
    image: "/images/projects/edawg/e-surat/1.jpg",
    title: "E-Surat",
    tech: ["CSS", "NextJS", "React", "Typescript"],
    description: "E-Surat is a web application for managing incoming,outgoing mail and printing letters",
    url: "https://surat-woad.vercel.app/",
    githubUrl: "https://github.com/edo6661/surat",
    urlImagesDrive: "https://drive.google.com/drive/folders/1G1DdaOyQlnuF8xyzcG-p0dqeCEX6_9W-",
  },

  {
    image: "/images/projects/edawg/alquran/1.jpg",
    title: "Al-Quran",
    tech: ["Vue", "CSS", "Typescript"],
    description: "A simple Al-Quran app using the Al-Quran API",
    url: "https://animebyaku-v1.vercel.app/",
    githubUrl: "https://github.com/edo6661/alquran-vue-1",
    urlImagesDrive: "https://drive.google.com/drive/folders/14xFlclXRQC2g8j4zJl4WK-EisOaAIa4-/",
  },
  {
    image: "/images/projects/edawg/gql/1.jpg",
    title: "Express KKN KKP",
    tech: ["Typescript"],
    description: "Registration of KKN KKP participants",
    url: "https://animebyaku-v1.vercel.app/",
    githubUrl: "https://main--pendaftaran-kkn-kkp.netlify.app/graphql",
    urlImagesDrive: "https://drive.google.com/drive/folders/1Pb2-xc8e_cUeaSurgVgWPth8cLYd0IES",
  },




];

const initialTechs: Tech[] = ["React", "Vue", "Flutter", "Kotlin", "Typescript", "NextJS", "CSS"]


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
        <span className='px-4 py-2 border-r border-line'>
          all;
        </span>
      </div>

      {isNotEmpty && (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6`}
        >
          {filteredProjects.map((project, i) =>
            <div key={i} className='border-line bg-primary-light border rounded-md relative flex flex-col'>
              <GithubCorner
                url={project.githubUrl}
              />
              <div className='absolute top-0 left-0 text-secondary-white px-2 py-1 space-y-4 rounded-tl-md rounded-br-md '
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                {project.tech.map((tech, i) => (
                  <Image
                    key={i}
                    src={projectTech[tech].imageFilled}
                    width={24}
                    height={24}
                    alt={projectTech[tech].title}
                    priority={i < 3}
                  />
                ))}
              </div>
              <a target='_blank' href={project.urlImagesDrive}>
                <Image
                  src={project.image}
                  width={200}
                  height={200}
                  className='object-cover w-full max-h-[200px] min-h-[200px]'
                  alt={project.title}
                  priority={i < 3}
                />
              </a>
              <div className='flex flex-col gap-4 py-6 px-4 flex-1'>
                <div className="flex flex-col gap-2 font-medium text-lg">
                  <span>
                    {project.title}
                  </span>
                  <span className='font-thin'>
                    {project.description}
                  </span>
                </div>
                <div className="flex-1 flex items-end justify-end">
                  <a target='_blank' href={project.url}
                    className='button block'
                  >
                    view-project
                  </a>
                </div>

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