import { RadioGroup, RadioButton } from 'common/components'
import {
  SORT_NAME,
  SET_SORT_ORDER,
} from '../films-overview/films-overview.constants'

const SubSort = ({ type, isAscending, dispatch }) => {
  switch (type) {
    case SORT_NAME:
      return (
        <RadioGroup
          name="sort-name-order-selector"
          legend="volgorde"
          value={isAscending ? 'asc' : 'desc'}
          onChange={(sortOrder) =>
            dispatch({ type: SET_SORT_ORDER, value: sortOrder })
          }
        >
          <RadioButton value="asc">a ➜ z</RadioButton>
          <RadioButton value="desc">z - a</RadioButton>
        </RadioGroup>
      )
    default:
      return <div>sub sort of other type</div>
  }
}

export default SubSort
