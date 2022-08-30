import classnames from 'classnames'
import { getPublicDirLink } from 'common'
import styles from './image.module.scss'

const Image = ({ imageName, alt, ext = 'jpg' }) => {
  const src = getPublicDirLink(imageName)

  // TODO: set proper sizes
  // see: https://mor10.com/experiments/ricg/

  return (
    <picture className={classnames(styles.image)}>
      <source
        media="(max-width: 480px)"
        srcSet={`${src}-480.${ext} 480w`}
        sizes="100vw"
      />
      <source
        media="(max-width: 768px)"
        srcSet={`${src}-768.${ext} 768w`}
        sizes="100vw"
      />
      <source
        media="(max-width: 1152px)"
        srcSet={`${src}-1152.${ext} 1152w`}
        sizes="100vw"
      />
      <source
        media="(max-width: 1440px)"
        srcSet={`${src}-1440.${ext} 1440w`}
        sizes="100vw"
      />

      <img src={`${src}-1440.${ext}`} alt={alt} />
    </picture>
  )
}

export default Image
