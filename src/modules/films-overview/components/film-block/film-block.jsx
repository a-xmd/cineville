import { Image } from 'common/components'
import styles from './film-block.module.scss'

const getImagePath = (filmName) =>
  `/static/images/films/${filmName}/${filmName}`

const FilmBlock = ({ film }) => {
  return <div className={styles['film-block']}>Film block: {film.title}</div>
}

export default FilmBlock
