import classnames from 'classnames'
import FilmBlock from '../film-block/film-block'
import styles from './films-overview.module.scss'

const FilmsOverview = ({ films }) => {
  return (
    <div className={styles['films-overview']}>
      {films.map((film) => (
        <FilmBlock key={`${film.identifier}`} film={film} />
      ))}
    </div>
  )
}

export default FilmsOverview

// <Image imageName={getImagePath('fire-of-love')} alt="yo yo yo" />
