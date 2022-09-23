import { useState } from 'react'
import Head from 'next/head'
import { FilmsOverview } from 'modules/films-overview'
import { readFile } from 'fs/promises'
import { sortFilms, SORT_TITLE } from 'modules/films-overview'

export default function Home({ _films }) {
  return (
    <>
      <Head>
        <title>Cineville Social Experiment</title>
        <meta
          name="description"
          content="A place to experiment with making Cineville website more social. Note: Not associated with Cineville!"
        />
      </Head>

      <FilmsOverview _films={_films} />
    </>
  )
}

export async function getStaticProps(context) {
  const data = await readFile('json/films.json', 'utf-8')

  return {
    props: {
      _films: sortFilms(JSON.parse(data), SORT_TITLE),
    },
  }
}
