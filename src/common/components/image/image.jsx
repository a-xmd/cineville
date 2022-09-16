import classnames from 'classnames'
import { getPublicDirLink } from 'common'
import styles from './image.module.scss'

const calculateResizedHeight = (width, height, resizedWith) => {
  return (height / width) * resizedWith
}

const Image = ({ imageName, alt, width, height, ext = 'jpg' }) => {
  const src = getPublicDirLink(imageName)

  // TODO: set proper sizes
  // see: https://mor10.com/experiments/ricg/

  // TODO: turn in to memoized component?

  return (
    <picture className={classnames(styles.image)}>
      <source
        media="(max-width: 480px)"
        srcSet={`${src}-480.${ext} 480w`}
        sizes="100vw"
        width={480}
        height={calculateResizedHeight(width, height, 480)}
      />
      <source
        media="(max-width: 768px)"
        srcSet={`${src}-768.${ext} 768w`}
        sizes="100vw"
        width={768}
        height={calculateResizedHeight(width, height, 768)}
      />
      <source
        media="(max-width: 1152px)"
        srcSet={`${src}-1152.${ext} 1152w`}
        sizes="100vw"
        width={1152}
        height={calculateResizedHeight(width, height, 1152)}
      />
      <source
        media="(max-width: 1440px)"
        srcSet={`${src}-1440.${ext} 1440w`}
        sizes="100vw"
        width={1440}
        height={height}
      />

      <img src={`${src}-1440.${ext}`} alt={alt} />
    </picture>
  )
}

export default Image
