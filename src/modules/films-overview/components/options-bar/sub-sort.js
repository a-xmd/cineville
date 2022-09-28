import { RadioGroup, RadioButton } from 'common/components'
import {
  SORT_TITLE,
  SORT_SCORE,
  SORT_DATE,
  SET_SORT_ORDER,
} from '../films-overview/films-overview.constants'

const SubSort = ({ type, isAscending, dispatch }) => {
  let leftText
  let rightText

  switch (type) {
    case SORT_TITLE:
      leftText = 'a'
      rightText = 'z'
      break
    case SORT_DATE:
      leftText = 'oud'
      rightText = 'nieuw'
      break
    case SORT_SCORE:
      leftText = 'laag'
      rightText = 'hoog'
      break
  }

  return (
    <RadioGroup
      name="sort-name-order-selector"
      legend="volgorde"
      value={isAscending ? 'asc' : 'desc'}
      onChange={(sortOrder) =>
        dispatch({ type: SET_SORT_ORDER, value: sortOrder })
      }
    >
      <RadioButton value="asc">
        {leftText} ➜ {rightText}
      </RadioButton>
      <RadioButton value="desc">
        {rightText} ➜ {leftText}
      </RadioButton>
    </RadioGroup>
  )
}

export default SubSort
