import { Mail, Phone, X } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Me Page'
}

const AboutPage = () => {
  return (
    <div className='text-secondary flex flex-1'>
      <FirstSectionAbout />
      <SecondSectionAbout />
      <ThirdSectionAbout />

    </div>
  )
}

export const ThirdSectionAbout = () => {
  return (
    <div className='border-line border-r flex flex-col flex-1'>
      <div className='border-b border-line'>
        <div className='text-secondary px-4 py-2 flex items-center gap-4 border-r border-line w-fit'>
          <span>
            professional-info
          </span>
          <X
            size={16}
          />
        </div>
      </div>
      <div className='flex flex-col gap-2 pl-2 pr-8 py-2 relative flex-1'>
        <ScrollBarCode />
        <LineOfCode line={1} prefix='/**' />

        <LineOfCode line={2} prefix='*' code='PT WARNA MAKMUR ABADI (Flutter Developer)- Jan 2025 to Mar 2025' />
        <LineOfCode line={3} prefix='*' code='- Developed a Flutter project integrating Google Maps (Geo Locator & Google Maps) and Payment Gateway.' />
        <LineOfCode line={4} prefix='*' code='' />
        <LineOfCode line={5} prefix='*' code='Bakrie Center Foundation & Bangkit (Mobile App Project) - Oct 2024 to Dec 2024' />
        <LineOfCode line={6} prefix='*' code='- Awarded Best Team in Bangkit Company Track Capstone Project.' />
        <LineOfCode line={7} prefix='*' code='- Developed a mobile application using Jetpack Compose, Kotlin, Dagger Hilt, Room, Clean Architecture, MVVM, and Retrofit.' />
        <LineOfCode line={8} prefix='*' code='' />
        <LineOfCode line={9} prefix='*' code='SoarX (Internship Junior Fullstack) - Dec 2023 to Mar 2024' />
        <LineOfCode line={10} prefix='*' code='- Reproduced projects using Next.js 14, React, TypeScript, TailwindCSS, and Framer Motion.' />
        <LineOfCode line={11} prefix='*' code='- Developed responsive designs for desktop and mobile platforms.' />
        <LineOfCode line={12} prefix='*' code='- Integrated Google Console (Google Analytics) & Vercel Analytics.' />
        <LineOfCode line={13} prefix='*' code='- Implemented SSR and used serverless databases (CockroachDB, MySQL).' />
        <LineOfCode line={14} prefix='*' code='' />
        <LineOfCode line={15} prefix='*' code='Telkom Akses (Warehouse Staff) - Feb 2021 to May 2022' />
        <LineOfCode line={16} prefix='*' code='- Managed warehouse receipts and maintained inventory accuracy.' />
        <LineOfCode line={17} prefix='*/' />
      </div>

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
      {code && <span>{code}</span>}
    </div>
  )
}

export const FirstSectionAbout = () => {
  return <div className='px-6 py-4 space-y-4 border-line border-r w-fit md:block hidden shrink-0'>
    <Image
      src='icons/info-professional.svg'
      alt='Professional'
      width={24}
      height={24}

    />
    <Image
      src='icons/info-personal.svg'
      alt='Personal'
      width={24}
      height={24}

    />
    <Image
      src='icons/info-hobbies.svg'
      alt='Hobbies'
      width={24}
      height={24}

    />
  </div>
}

export const SecondSectionAbout = () => {
  return <div className='border-line border-r w-fit flex flex-col shrink-0'>
    <div className='border-b border-line text-secondary-white px-4 py-2 flex items-center gap-2'>
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
        professional-info
      </span>
    </div>
    <div className='px-4 py-2 space-y-2 border-b border-line'>

      <IconFolderText
        icon='icons/diple.svg'
        altIcon='Diple'
        folder='icons/folder1.svg'
        altFolder='Red Folder'
        text='experience'
      />
      <IconFolderText
        icon='icons/diple.svg'
        altIcon='Diple'
        folder='icons/folder2.svg'
        altFolder='Green Folder'
        text='hard-skills'
        isActive={true}
      />
      <IconFolderText
        icon='icons/diple.svg'
        altIcon='Diple'
        folder='icons/folder3.svg'
        altFolder='Purple Folder'
        text='soft-skills'
      />
    </div>
    <div>
      <div className='border-b border-line text-secondary-white px-4 py-2 flex items-center gap-2'>
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
          contacts
        </span>
      </div>
      <div className='px-4 py-2 space-y-2 border-b border-line'>
        <div className="flex flex-items-center gap-2 max-w-[160px]">
          <div className='w-6 h-6'>
            <Mail

            />
          </div>
          <span className='break-all'>
            muhammadridho5654@gmail.com
          </span>
        </div>
        <div className="flex flex-items-center gap-2 max-w-[160px]">
          <div className='w-6 h-6'>
            <Phone

            />
          </div>
          <span className='break-all'>
            +6289649762100
          </span>
        </div>
      </div>
    </div>

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
        rotate: isActive ? '90deg' : '0deg'
      }}
    />
    <Image
      src={folder}
      alt={altFolder}
      width={16}
      height={16}
    />
    <span className={`${isActive ? 'text-secondary-white' : 'text-secondary'}`}>
      {text}
    </span>
  </div>
)


export default AboutPage