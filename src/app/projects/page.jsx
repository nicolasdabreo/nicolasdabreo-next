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
            <Card.Link href={project.link.href || ""}>
              <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <Card.Cta className={project.link.label == "WIP" && "text-zinc-500"}>
                {project.type == "github" && <GitHubIcon className="flex-none w-6 h-6" />}
                {project.type == "application" && <ComputerScreenIcon className="flex-none w-6 h-6" />}
                <span className="ml-2">{project.link.label}</span>
              </Card.Cta>
            </Card.Link>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
