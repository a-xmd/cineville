// import { useId } from 'react'
import classnames from 'classnames'
import { DropDown, Option } from 'common/components'
import {
  SORT_DATE,
  SORT_NAME,
  SORT_SCORE,
} from '../films-overview/films-overview.constants'
import SubSort from './sub-sort'
import styles from './options-bar.module.scss'

const OptionsBar = ({ sortBy, isAscending, dispatch }) => {
  const sortTypes = [
    { type: SORT_NAME, name: 'naam' },
    { type: SORT_SCORE, name: 'score' },
    { type: SORT_DATE, name: 'datum' },
  ]

  // TODO: try using useId() hook
  // see: https://github.com/vercel/next.js/issues/30876
  // const id = useId()
  const id = 'cv-sort-by-button'

  return (
    <>
      <div className={classnames(styles['options-bar'])}>
        <div>
          <label htmlFor={id} className={classnames(styles.label)}>
            sorteer op
          </label>
          <DropDown
            value={sortBy}
            handleChange={(e) =>
              dispatch({
                type: 'SET_SORT_TYPE',
                value: e.currentTarget.value,
              })
            }
            id={id}
          >
            {sortTypes.map((option) => (
              <Option key={option.type} value={option.type}>
                {option.name}
              </Option>
            ))}
          </DropDown>
        </div>

        <div className={classnames(styles['order'])}>
          <SubSort
            type={sortBy}
            isAscending={isAscending}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  )
}

export default OptionsBar
