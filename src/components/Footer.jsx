import { ContainerInner, ContainerOuter } from '@/components/Container'

export function Footer() {
  return (
    <footer className="flex-none mt-16">
      <ContainerOuter>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Made with ♥️ by Nicolas Dabreo
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
