import classnames from 'classnames'
import FilmBlock from '../film-block/film-block'
import styles from './films-overview.module.scss'

const FilmsOverview = ({ films }) => {
  return (
    <>
      <h2>Visited films</h2>
      <ul className={styles['films-overview']}>
        {films.map((film) => (
          <li key={`${film.identifier}`}>
            <FilmBlock film={film} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default FilmsOverview

// <Image imageName={getImagePath('fire-of-love')} alt="yo yo yo" />
