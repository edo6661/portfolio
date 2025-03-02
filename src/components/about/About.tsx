"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { aboutItems, AboutItems, AllItems, hobbiesItemsValues, imagesItem, personalInfoItemsValues, professionalInfoItemsValues, } from '@/constants/about';
import { AnimatePresence, motion } from 'framer-motion';
const yVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.5 },
}
const yTransition = {
  duration: 0.5
}
const About = () => {
  const [activeItem, setActiveItem] = useState<AboutItems>("professional-info")
  const [activeItemValue, setActiveItemValue] = useState<AllItems>("experience")

  useEffect(() => {
    switch (activeItem) {
      case 'professional-info':
        setActiveItemValue('experience')
        break;
      case 'personal-info':
        setActiveItemValue('bio')
        break;
      case 'hobbies':
        setActiveItemValue('films')
        break;
    }
  }, [activeItem])

  return (
    <div className='text-secondary flex md:flex-row flex-col md:flex-1 min-h-[620px] items-stretch'>
      <FirstSectionAbout
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <SecondSectionAbout
        activeItem={activeItem}
        setActiveItemValue={setActiveItemValue}
        activeItemValue={activeItemValue}
      />
      <ThirdSectionAbout
        activeItemValue={activeItemValue}
      />

    </div>
  )
}

export default About

export const ThirdSectionAbout = (
  { activeItemValue }: {
    activeItemValue: AllItems
  }
) => {
  const codeLines = getCodeLines(activeItemValue);
  return (
    <div className='border-line border-r flex flex-col flex-1 min-h-full'>
      <AnimatePresence mode="wait"
        initial={false}
      >
        <motion.div
          key={activeItemValue}
          variants={yVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={yTransition}
          className='border-b border-line md:block hidden'>
          <div className='text-secondary px-4 py-2 gap-4'>
            <span>
              {activeItemValue}
            </span>

          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait"
        initial={false}
      >
        <motion.div
          key={activeItemValue}
          variants={yVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={yTransition}
          className='flex flex-col gap-2 pl-2 pr-8 py-2 relative flex-1 h-full'>
          <ScrollBarCode />
          <div

          >
            {codeLines.map((item, index) => (
              <LineOfCode
                key={index}
                line={item.line}
                prefix={item.prefix}
                code={item.code}
              />
            ))}
          </div>


        </motion.div>
      </AnimatePresence>

    </div>
  )
}


export const ScrollBarCode = () => {
  return (
    <>
      <div className='right-7 top-0 bg-line absolute z-10 w-[1px] h-full' />
      <div className='right-1 top-1 absolute z-10 w-5 h-2 bg-[#607B96]' />
    </>
  )
}

export const LineOfCode = ({
  line,
  prefix,
  code
}: {
  line: number,
  prefix: string,
  code?: string
}) => {
  return (
    <div className='flex gap-4'>
      <span>{line}</span>
      <span>{prefix}</span>
      {code && <span className='break-all'>{code}</span>}
    </div>
  )
}

export const FirstSectionAbout = (
  { activeItem, setActiveItem }: {
    activeItem: AboutItems,
    setActiveItem: (item: AboutItems) => void
  }
) => {
  const handleClick = (item: AboutItems) => {
    setActiveItem(item)
  }
  return <div

    className="px-6 py-4 border-line md:border-r border-b md:w-fit w-full shrink-0 flex md:flex-col justify-around md:justify-start items-center space-x-4 md:space-y-4 md:space-x-0"
  >
    {aboutItems.map((item) => (
      <motion.button
        key={item}
        onClick={() => handleClick(item)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 ${activeItem === item ? 'opacity-100' : 'opacity-50'} 
        transition-opacity duration-300 ease-in-out hover:opacity-100
      `}
      >
        <Image
          src={imagesItem[item]}
          alt={item}
          width={24}
          height={24}
        />
      </motion.button>
    ))}
  </div>

}

export const SecondSectionAbout = (
  { activeItem, setActiveItemValue, activeItemValue }: {
    activeItem: AboutItems,
    setActiveItemValue: (item: AllItems) => void,
    activeItemValue: AllItems
  }
) => {
  const items = activeItem === 'professional-info' ? professionalInfoItemsValues :
    activeItem === 'personal-info' ? personalInfoItemsValues :
      hobbiesItemsValues


  return <div

    className='border-line border-r w-full md:w-fit md:flex md:flex-col shrink-0 md:min-w-[200px] md:justify-start'
  >
    <AnimatePresence mode="wait"
      initial={false}


    >
      <motion.div
        key={activeItem}
        variants={yVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={yTransition}
        className=' border-line text-secondary-white px-4 py-2 flex items-center gap-2 border-b '>
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
        <span>
          {activeItem}
        </span>
      </motion.div>
    </AnimatePresence>
    <AnimatePresence mode='wait'
      initial={false}
    >
      <motion.div
        key={activeItem}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='px-4 py-2 space-y-2 md:border-b border-line border-b'>
        {items.map((item, i) => (
          <motion.button

            key={item}
            onClick={() => setActiveItemValue(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2`}
          >
            <IconFolderText
              icon='icons/diple.svg'
              altIcon={`Diple ${i + 1}`}
              folder={`icons/folder${i + 1}.svg`}
              altFolder={`Folder ${i + 1}`}
              text={item}
              isActive={activeItemValue === item}
            />
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  </div>


}

export const IconFolderText = ({ icon, folder, text, altFolder, altIcon, isActive = false }: {
  icon: string,
  folder: string,
  altIcon: string,
  altFolder: string,
  text: string,
  isActive?: boolean
}) => (
  <div className="flex items-center gap-2">
    <Image
      src={icon}
      alt={altIcon}
      width={12}
      height={12}
      style={{
        width: 12,
        height: 12,
        rotate: isActive ? '90deg' : '0deg',
        transition: 'rotate 0.5s ease'
      }}
    />
    <Image
      src={folder}
      alt={altFolder}
      width={16}
      height={16}
    />
    <span className={`${isActive ? 'text-secondary-white' : 'text-secondary'} 
      transition-color duration-300 ease-in-out hover:text-secondary-white
      
    `}>
      {text}
    </span>
  </div>
)
const getCodeLines = (activeItemValue: AllItems) => {
  switch (activeItemValue) {
    case 'experience': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'PT WARNA MAKMUR ABADI (Flutter Developer) - Jan 2025 to Mar 2025' },
        { line: 3, prefix: '*', code: '- Developed a Flutter project integrating Google Maps (Geo Locator & Google Maps) and Payment Gateway.' },
        { line: 4, prefix: '*', code: '' },
        { line: 5, prefix: '*', code: 'Bakrie Center Foundation & Bangkit (Mobile App Project) - Oct 2024 to Dec 2024' },
        { line: 6, prefix: '*', code: '- Awarded Best Team in Bangkit Company Track Capstone Project.' },
        { line: 7, prefix: '*', code: '- Developed a mobile application using Jetpack Compose, Kotlin, Dagger Hilt, Room, Clean Architecture, MVVM, and Retrofit.' },
        { line: 8, prefix: '*', code: '' },
        { line: 9, prefix: '*', code: 'SoarX (Internship Junior Fullstack) - Dec 2023 to Mar 2024' },
        { line: 10, prefix: '*', code: '- Reproduced projects using Next.js 14, React, TypeScript, TailwindCSS, and Framer Motion.' },
        { line: 11, prefix: '*', code: '- Developed responsive designs for desktop and mobile platforms.' },
        { line: 12, prefix: '*', code: '- Integrated Google Console (Google Analytics) & Vercel Analytics.' },
        { line: 13, prefix: '*', code: '- Implemented SSR and used serverless databases (CockroachDB, MySQL).' },
        { line: 14, prefix: '*', code: '' },
        { line: 15, prefix: '*', code: 'Telkom Akses (Warehouse Staff) - Feb 2021 to May 2022' },
        { line: 16, prefix: '*', code: '- Managed warehouse receipts and maintained inventory accuracy.' },
        { line: 17, prefix: '*/', code: '' },
      ];
    }
    case 'hard-skills': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Hard Skills:' },
        { line: 3, prefix: '*', code: 'Technology: React, React Native, Next.js 14, Vue, Express, TypeScript, Redux, Kotlin, Jetpack Compose.' },
        { line: 4, prefix: '*', code: 'Database: MongoDB, Mongoose, PostgreSQL, MySQL, Prisma, GraphQL, Apollo Client, Convex, Firebase.' },
        { line: 5, prefix: '*', code: 'Front-End: Responsive web & mobile app development.' },
        { line: 6, prefix: '*/', code: '' },
      ];
    }
    case 'soft-skills': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Soft Skills:' },
        { line: 3, prefix: '*', code: 'Collaboration, Communication, Time Management, Problem-Solving.' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    case 'bio': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 3, prefix: '*', code: 'Software Engineering student with expertise in React, React Native, Next.js, Vue, Kotlin, Flutter, Jetpack Compose.' },
        { line: 4, prefix: '*', code: 'Strong in communication, teamwork, management, and problem-solving.' },
        { line: 5, prefix: '*', code: 'Committed to continuous learning and contributing to company growth.' },
        { line: 6, prefix: '*/', code: '' },
      ];
    }
    case 'interests': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Interests:' },
        { line: 3, prefix: '*', code: 'Anime, Films, Music, Woman' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    case 'education': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Education:' },
        { line: 3, prefix: '*', code: 'Global Institute Technology And Business (2022 - 2025, Expected)' },
        { line: 4, prefix: '*', code: 'Undergraduate in Software Engineering, GPA: 3.80/4.00.' },
        { line: 5, prefix: '*/', code: '' },
      ];
    }
    case 'films': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Films:' },
        { line: 3, prefix: '*', code: 'https://www.anime-planet.com/users/Edooo/anime/watched' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    case 'games': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Games:' },
        { line: 3, prefix: '*', code: 'Dota (Achievement: ex mmr 7.4)' },
        { line: 4, prefix: '*', code: 'Mobile Legend (Achievement: Immortal 156)' },
        { line: 5, prefix: '*', code: 'Yu Zhong Global' },
        { line: 6, prefix: '*', code: 'Arlot Indonesia' },
        { line: 7, prefix: '*/', code: '' },
      ];
    }
    case 'music': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Music:' },
        { line: 3, prefix: '*', code: 'Rapper, Old Music, Game, Japanese Old Pop' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    case 'hobbies': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Hobbies:' },
        { line: 3, prefix: '*', code: 'Anime, Film, Music' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    case 'personal-info': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Personal Info:' },
        { line: 3, prefix: '*', code: '-' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    case 'professional-info': {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: 'Professional Info:' },
        { line: 3, prefix: '*', code: '-' },
        { line: 4, prefix: '*/', code: '' },
      ];
    }
    default: {
      return [
        { line: 1, prefix: '/**', code: '' },
        { line: 2, prefix: '*', code: '-' },
        { line: 3, prefix: '*/', code: '' },
      ];
    }
  }
};
