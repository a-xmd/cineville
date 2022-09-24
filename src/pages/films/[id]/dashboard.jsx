import { readFile } from 'fs/promises'
import { FilmLayout } from 'modules/film-layout'

export default function Film({ film }) {
  return <div>dashboard</div>
}

const getFilms = async () => {
  const response = await readFile('json/films.json', 'utf-8')
  return JSON.parse(response)
}

export async function getStaticProps({ params }) {
  const films = await getFilms()

  return {
    props: {
      film: films.find((film) => film.identifier === params.id),
    },
  }
}

export async function getStaticPaths() {
  const films = await getFilms()

  const paths = films.map((film) => ({
    params: { id: film.identifier },
  }))

  return {
    paths,
    fallback: false,
  }
}

Film.getLayout = function (page) {
  return (
    <FilmLayout title={`Work title / ${page.props.film.title}`}>
      {page}
    </FilmLayout>
  )
}
