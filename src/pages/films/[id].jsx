import Head from 'next/head'
import { readFile } from 'fs/promises'

export default function Film({ film }) {
  return (
    <>
      <h1>film : {film.title}</h1>
      <div>text text text</div>
      <h2>h2 title</h2>
      <div>text text text</div>
      <h3>h3 title</h3>
      <div>text text text</div>
    </>
  )
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

const FilmLayout = ({ children, title, descriptionContent }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={(descriptionContent = 'Experiment: social Cineville app')}
        />
      </Head>
      <div>
        <div>film header</div>
        {children}
      </div>
    </>
  )
}

Film.getLayout = function (page) {
  return (
    <FilmLayout title={`Work title / ${page.props.film.title}`}>
      {page}
    </FilmLayout>
  )
}
