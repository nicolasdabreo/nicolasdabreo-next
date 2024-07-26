import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import {
  GitHubIcon,
} from '@/components/Icons'
import { PROJECTS } from '../constants'

export const metadata = {
  title: 'Projects',
  description: 'Personal creations of Nicolas Dabreo',
}

export default function Projects() {
  return (
    <SimpleLayout title="My Projects">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 divide-y divide-zinc-100 dark:divide-zinc-700/40 sm:divide-none"
      >
        {PROJECTS.map((project) => (
          <Card as="li" key={project.name}>

            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <Card.Description className="flex-auto">{project.description}</Card.Description>
            <div className="flex-none relative z-10 flex mt-6 text-sm font-medium flex-row transition text-zinc-400 dark:text-zinc-200 gap-3">
              {project.link.github &&  (
                <Link rel="noopener noreferrer" target="_blank" href={project.link.github} className="text-zinc-800 dark:text-white hover:text-violet-500">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <GitHubIcon className="w-8 h-8" />
                </div>
                </Link>
              )}
              {project.link.application && (
                <Link rel="noopener noreferrer" target="_blank" href={project.link.application} className="text-zinc-800 dark:text-white hover:text-violet-500">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <LinkIcon className="flex-none w-8 h-8" />
                </div>
              </Link>
              )}

              {!project.link.application && !project.link.github && (
                <span className='flex items-center justify-center gap-1'>
                  <LinkIcon className="flex-none w-8 h-8" />
                  WIP
                </span>
              )}
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
