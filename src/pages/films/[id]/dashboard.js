import { readFile } from 'fs/promises'
import { FilmLayout } from 'modules/film-page'
import { FilmDashboard } from 'modules/film-dashboard'

export default function Film({ film }) {
  return <FilmDashboard film={film} />
}

// TODO: move to util function!
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
    <FilmLayout
      title={page.props.film.title}
      identifier={page.props.film.identifier}
    >
      {page}
    </FilmLayout>
  )
}
