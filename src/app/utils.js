import glob from 'fast-glob'

async function importArticle(articleFilename) {
  let { article } = await import(`./blog/${articleFilename}`)

  if(article.published) {
    return {
      slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
      ...article,
    }
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/blog',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles
  .filter(article => article !== undefined)
  .sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
  
