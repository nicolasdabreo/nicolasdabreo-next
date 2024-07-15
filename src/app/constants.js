import logoStitched from '@/images/logos/stitched.png'
import logoSquareEnix from '@/images/logos/squareenix.png'
import logoPlanetaria from '@/images/logos/planetaria.svg'

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
      link: { href: 'http://lgsl.fly.dev', label: 'lgsl.fly.dev' },
      type: "application"
    },
    {
      name: 'Concurrent Word Processor',
      description:
        'A multi-channel shared concurrent word processor using only built in BEAM tooling and concurrency best practices.',
      link: { href: 'https://github.com/nicolasdabreo/ex_word_processor', label: 'github.com' },
      type: "github"
    },
    {
      name: 'Prototype Inventory Management',
      description:
        'A LiveView MRP software that I used for prototyping new tools and approaches that I wanted to test out. This later became the basis for CardCommerce.',
      link: { href: 'https://github.com/nicolasdabreo/inventory_liveview', label: 'github.com' },
      type: "github"
    },
  ]

export const WORK_HISTORY = [
    {
      company: 'Megalixir LTD',
      title: 'Contract Software Engineer',
      logo: logoPlanetaria,
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