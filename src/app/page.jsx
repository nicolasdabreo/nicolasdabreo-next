import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  BriefcaseIcon,
  MailIcon,
  ArrowAwayIcon
} from '@/components/Icons'

import { WORK_HISTORY } from './constants'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="p-1 -m-1 group" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative flex items-center justify-center flex-none w-12 h-12 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="w-10 h-10" unoptimized />
      </div>
      <dl className="flex flex-wrap flex-auto gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  return (
    <div className="p-6 rounded-2xl border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="flex-none w-6 h-6" />
        <span className="ml-3">Work History</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {WORK_HISTORY.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="https://github.com/nicolasdabreo/nicolasdabreo/blob/main/about/resume.md" variant="secondary" className="w-full mt-6 group" target="_blank" rel="noopener noreferrer">
        See Full CV
        <ArrowAwayIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container>
        <div className="grid max-w-2xl grid-cols-1 mx-auto lg:grid-cols-2 gap-y-20 lg:max-w-none">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Nicolas Dabreo
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-500">
              Contract Software Engineer, Elixir Enthusiast, Card Game Nerd
            </p>
            <div className="flex gap-6 mt-6">
              <SocialLink
                href="https://github.com/nicolasdabreo"
                aria-label="Follow on GitHub"
                icon={GitHubIcon} 
                target="_blank" 
                rel="noopener noreferrer"
                />
              <SocialLink
                href="https://www.linkedin.com/in/nicolasdabreo/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon} 
                target="_blank" 
                rel="noopener noreferrer"
                />
              <SocialLink
                href="mailto:nicolas@megalixir.co.uk"
                aria-label="Contact me"
                icon={MailIcon}
                />

            </div>
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
