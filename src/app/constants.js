import logoStitched from '@/images/logos/stitched.png'
import logoSquareEnix from '@/images/logos/squareenix.png'
import logoMegalixir from '@/images/logos/megalixir.svg'

export const PROJECTS = [
    {
      name: 'CardCommerce',
      description:
        'Inventory management software purpose built for Trading Card powersellers and game stores. Designed to sync all commited changes across marketplaces concurrently.',
      link: { label: 'WIP' },
      type: "application"
    },
    {
      name: 'LGS Leagues',
      description:
        'A shared nothing SAAS style project built for Local Game Stores to manage their competitive tournament Leagues. Initially built in Golang, rewritten in LiveView.',
      link: { href: 'https://lgsleagues.com', label: 'lgsleagues.com' },
      type: "application"
    },
    {
      name: 'Concurrent Word Processor',
      description:
        'A multi-channel shared concurrent word processor using only built in BEAM tooling and concurrency best practices.',
      link: { href: 'https://word.dabreo.dev', label: 'word.dabreo.dev' },
      type: "application"
    },
    {
      name: 'Prototype Inventory Management',
      description:
        'A LiveView MRP software that I used for prototyping new tools and approaches that I wanted to test out. This later became the basis for CardCommerce.',
      link: { href: 'https://github.com/nicolasdabreo/inventory_liveview', label: 'github.com' },
      type: "github"
    },
    {
      name: 'Calling All Adventurers Website',
      description:
        'NextJS marketing website build for the fantasy Podcast, Calling All Adventurers.',
      link: { href: 'https://main.d33pj7rhq0gmpk.amplifyapp.com/', label: 'thetowerarray.com' },
      type: "application"
    },
  ]

export const WORK_HISTORY = [
    {
      company: 'Megalixir LTD',
      title: 'Contract Software Engineer',
      logo: logoMegalixir,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Stitched.co.uk',
      title: 'Full-Stack Engineer',
      logo: logoStitched,
      start: '2020',
      end: '2022',
    },
    {
      company: 'Square Enix Europe',
      title: 'Junior Backend Engineer',
      logo: logoSquareEnix,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Square Enix Europe',
      title: 'Junior Frontend Engineer',
      logo: logoSquareEnix,
      start: '2018',
      end: '2019',
    },
  ]