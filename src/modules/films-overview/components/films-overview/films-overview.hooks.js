import { useReducer, useEffect } from 'react'
import {
  SORT_NAME,
  SET_SORT_TYPE,
  SET_SORT_ORDER,
} from './films-overview.constants'
import { sortByTitle } from './films-overview.functions'

const reducer = (state, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_SORT_TYPE:
      newState.sortBy = action.value
      break
    case SET_SORT_ORDER:
      newState.isAscending = action.value === 'asc'
      break
  }

  newState.films = sortByTitle(state.films, newState.isAscending)
  return newState
}

export const useFilms = (_films) => {
  const [state, dispatch] = useReducer(reducer, {
    sortBy: SORT_NAME,
    isAscending: true,
    films: _films,
  })

  return { state, dispatch }
}
