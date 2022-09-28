import { FilmLayout } from 'modules/film-page'
import { readFile } from 'fs/promises'

export default function Comments({ film }) {
  return <div>comments comments</div>
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

// TODO: move to util function!
const getFilms = async () => {
  const response = await readFile('json/films.json', 'utf-8')
  return JSON.parse(response)
}

Comments.getLayout = function (page) {
  return (
    <FilmLayout
      title={page.props.film.title}
      identifier={page.props.film.identifier}
    >
      {page}
    </FilmLayout>
  )
}
