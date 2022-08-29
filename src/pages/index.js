import { FilmsOverview } from 'modules/films-overview'
import { readFile } from 'fs/promises'

export default function Home({ films }) {
  return (
    <>
      <FilmsOverview films={films} />
    </>
  )
}

export async function getStaticProps(context) {
  const data = await readFile('json/films.json', 'utf-8')
  return {
    props: {
      films: JSON.parse(data),
    },
  }
}
