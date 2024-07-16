import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles, formatDate } from '@/app/utils'
import { Container } from '@/components/Container'
import { PencilIcon } from '@/components/Icons'

export const metadata = {
  title: 'Blog Posts',
  description: 'Blog Posts written by Nicolas Dabreo',
}

export default async function Blog() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Software blog"
    >
      {!articles.length && (
        <Container className="flex items-center h-full py-8 sm:py-12">
          <div className="flex flex-row items-center justify-center gap-8">
            <div className='flex items-center justify-center w-20 h-20 p-2 pb-3 pl-3 rounded-lg bg-zinc-100 dark:bg-zinc-800'>
              <PencilIcon className="w-16 h-16" />
            </div>
            <div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
                Nothing yet
              </h2>
              <p className="pb-4 mt-4 text-base text-zinc-600 dark:text-zinc-400">
                I&apos;m working on it...
              </p>
            </div>
          </div>
        </Container>
      )}
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col max-w-3xl space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="hidden mt-1 md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}
