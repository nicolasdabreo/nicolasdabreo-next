import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card({ as, className, children }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start h-full')}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <>
      <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
      <Link {...props} className="h-full">
        <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10 flex flex-col h-full">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({ as, href, children }) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({ className, children }) {
  return (
    <p className="relative z-10 flex flex-auto mt-4 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children, className }) {
  return (
    <div
      aria-hidden="true"
      className={clsx("relative z-10 flex items-center mt-4 text-sm font-medium text-violet-500", className)}
    >
      {children}
      <ChevronRightIcon className="w-4 h-4 ml-1 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as,
  decorate = false,
  className,
  children,
  ...props
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
