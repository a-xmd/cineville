import { useReducer, useEffect } from 'react'
import {
  SORT_TITLE,
  SET_SORT_TYPE,
  SET_SORT_ORDER,
  SORT_DATE,
} from './films-overview.constants'
import { sortFilms } from './films-overview.functions'

const reducer = (state, action) => {
  const newState = { ...state }

  switch (action.type) {
    case SET_SORT_TYPE:
      newState.sortBy = action.value
      newState.isAscending = true
      break
    case SET_SORT_ORDER:
      newState.isAscending = action.value === 'asc'
      break
  }

  newState.films = sortFilms(
    newState.films,
    newState.sortBy,
    newState.isAscending
  )
  return newState
}

export const useFilms = (_films) => {
  const [state, dispatch] = useReducer(reducer, {
    sortBy: SORT_DATE,
    isAscending: false,
    films: _films,
  })

  return { state, dispatch }
}
