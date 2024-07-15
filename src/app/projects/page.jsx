import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {
  ComputerScreenIcon,
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
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              {project.type == "github" && <GitHubIcon className="w-8 h-8" />}
              {project.type == "application" && <ComputerScreenIcon className="w-8 h-8" />}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.link.href ? <Card.Link href={project.link.href}>{project.name}</Card.Link> : <span>{project.name}</span>}
              
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-violet-500 dark:text-zinc-200">
              <LinkIcon className="flex-none w-6 h-6" />
              {project.link.label ?  <span className="ml-2">{project.link.label}</span> : "WIP"}
             
            </p>
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
