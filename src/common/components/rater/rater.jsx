import classnames from 'classnames'
import styles from './rater.module.scss'

const Ball = ({ score, ballScore }) => {
  const diff = score - ballScore

  let filledPercentage = 0

  if (diff > 0) {
    filledPercentage = diff >= 1 ? 100 : diff * 100
  }

  return (
    <div className={classnames(styles.ball)}>
      <div
        className={classnames(styles['inner-ball'])}
        style={{
          '--filled-percentage': `${filledPercentage}%`,
        }}
      ></div>
    </div>
  )
}

const Rater = ({ score, maxScore }) => {
  return (
    <>
      <div className={classnames(styles.rater)}>
        {Array.from({ length: maxScore }).map((ball, index) => {
          return <Ball key={index} score={score} ballScore={index} />
        })}
      </div>
      <span className={classnames('mono', styles.rating)}>{score}</span>
    </>
  )
}

export default Rater
