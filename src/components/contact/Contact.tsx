"use client"
import Image from 'next/image'
import React, { useActionState } from 'react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactState, sendMail } from '@/lib/node-mailer';

type LeftSectionKey = 'contacts' | 'socials'
const initialIsOpens: Record<LeftSectionKey, boolean> = {
  contacts: true,
  socials: true
}

const Contact = () => {
  const [state, send, isPending] = useActionState(sendMail, {})

  const [isOpens, setIsOpens] = React.useState<Record<LeftSectionKey, boolean>>(initialIsOpens)

  const onChangeIsOpen = (key: LeftSectionKey) => {
    setIsOpens({
      ...isOpens,
      [key]: !isOpens[key]
    })
  }
  return (
    <div className='text-secondary flex md:flex-row flex-col md:flex-1 min-h-[620px] items-stretch'>
      <LeftSection
        isOpens={isOpens}
        onChangeIsOpen={onChangeIsOpen}
      />
      <RightSection
        send={send}
        isPending={isPending}
        state={state}
      />
    </div>
  )
}

const RightSection = (
  { send, isPending, state }: {
    send: (formData: FormData) => void,
    isPending: boolean,
    state: ContactState
  }
) => {
  return (
    <div className='flex flex-col flex-1'>
      <span className='py-2 px-4 border-r border-line w-fit'>
        contacts
      </span>
      <div className='border-t border-line p-4 w-full grid sm:grid-cols-2 items-center justify-center gap-8  '>
        <FormRight
          send={send}
        >
          <FieldRight
            label='_name'
            htmlFor='name'
            type='text'
          />
          <FieldRight
            label='_email'
            htmlFor='email'
            type='email'
          />
          <FieldRight
            label='_subject'
            htmlFor='subject'
            type='text'
          />
          <FieldRight
            label='_message'
            htmlFor='message'
            type='text'
            isTextArea
          />
          <button className='button w-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-150' disabled={isPending}>
            {isPending ? 'Sending...' : 'Send'}
          </button>
          {state?.message && (
            <div
              className={`p-3 rounded-md ${state.success
                ? 'bg-green-500/20 text-green-500'
                : 'bg-red-500/20 text-red-500'
                }`}
            >
              {state.message}
            </div>
          )}



        </FormRight>
        <div >
          <Image
            src={'/images/anime/revy.png'}
            alt='Revy'
            width={400}
            height={400}
            className='rounded-xl border-t border-b border-line'
          />
        </div>
      </div>

    </div>
  )
}
const FieldRight = (
  { label, htmlFor, type, isTextArea = false }: {
    label: string,
    htmlFor: string,
    type: string,
    isTextArea?: boolean
  }
) => {
  return (
    <div className='flex flex-col gap-2'>
      <LabelRight text={label} htmlFor={htmlFor} />
      {isTextArea ? (
        <TextAreaRight
          id={htmlFor}
          name={htmlFor}
          rows={4}
          className='border border-line placeholder-slate-500 bg-[#011221] px-4 py-2 rounded-md
            focus:ring-2 focus:ring-secondary-white focus:ring-opacity-50 focus:outline-none transition-colors duration-150'
        />
      ) : (
        <InputRight
          id={htmlFor}
          name={htmlFor}
          type={type}
          className='border border-line placeholder-slate-500 bg-[#011221] px-4 py-2 rounded-md
            focus:ring-2 focus:ring-secondary-white focus:ring-opacity-50 focus:outline-none transition-colors duration-150
          '
        />
      )}
    </div>
  )
}

const FormRight = ({ children, send }: {
  children: React.ReactNode,
  send: (formData: FormData) => void

}) => {
  return (
    <form className='flex flex-col gap-4 mx-auto' action={send}>
      {children}
    </form>
  )
}
const LabelRight = ({ text, htmlFor }: { text: string, htmlFor: string }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>
        {text}
      </label>
    </div >
  )
}
const InputRight = (
  { ...props }: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <div>
    <input
      {...props}
      required
    />
  </div>
}
const TextAreaRight = (
  { ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return <div>
    <textarea
      {...props}
      required
    />
  </div>
}

const LeftSection = (
  { isOpens, onChangeIsOpen }: {
    isOpens: Record<LeftSectionKey, boolean>,
    onChangeIsOpen: (key: LeftSectionKey) => void
  }
) => {
  const isActiveContacts = isOpens.contacts
  const isActiveSocials = isOpens.socials

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }
  const transition = {
    duration: 0.2
  }
  return (
    <motion.div layout className='border-r border-line min-w-[200px]'>
      <HeaderLeft text='Contacts'
        onClick={() => onChangeIsOpen('contacts')}
        isActive={isActiveContacts}
      />
      <AnimatePresence>
        {isActiveContacts && (
          <motion.div
            key='contacts'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
            className='border-b border-line'
          >
            <LinkLeft text='Email' href='mailto:muhammadridhi5654@gmail.com' icon='mail' />
            <LinkLeft text='Phone' href='tel:+6281234567890' icon='phone' />
          </motion.div>
        )}
      </AnimatePresence>
      <HeaderLeft text='Socials'
        onClick={() => onChangeIsOpen('socials')}
        isActive={isActiveSocials}
      />
      <AnimatePresence>
        {isActiveSocials && (
          <motion.div
            key='socials'
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            className='border-b border-line'
          >
            <LinkLeft text='LinkedIn' href='https://www.linkedin.com/in/muhammad-ridho-81890720a/' icon='linkedin' />
            <LinkLeft text='Github' href='https://www.github.com/edo6661' icon='github' />
            <LinkLeft text='Instagram' href='https://www.instagram.com/edawgz666/' icon='instagram' />
            <LinkLeft text='Facebook' href='https://www.facebook.com/tembemzo' icon='facebook' />
          </motion.div>

        )}
      </AnimatePresence>
    </motion.div>
  )
}
const HeaderLeft = ({ text, onClick, isActive }: {
  text: string,
  onClick?:
  () => void,
  isActive: boolean

}) => {
  const style = isActive ? 'text-secondary-white' : 'text-secondary'
  return (
    <button className={`items-center flex gap-2 ${style} transition-colors duration-200 hover:text-secondary-white px-4 py-2 w-full hover:bg-[#1e2d3d74] border-b border-line`}
      onClick={onClick}
    >
      <Image
        src="icons/arrow.svg"
        alt="Arrow"
        width={12}
        height={12}
        style={{
          width: 12,
          height: 12,
          transition: 'transform 0.2s',
          transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)'

        }}
      />
      <span>{text}</span>
    </button>
  )

}
const LinkLeft = ({ text, href, icon }: { text: string, href: string, icon: IconName }) => {
  return (
    <a href={href} target='_blank' rel='noreferrer' className='flex items-center gap-2 px-8 py-2 transition-colors duration-150 hover:text-secondary-white' >
      <DynamicIcon
        name={icon}
      />
      <span>{text}</span>
    </a>
  )
}

export default Contact