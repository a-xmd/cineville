import { SORT_DATE, SORT_TITLE, SORT_SCORE } from './films-overview.constants'

export const sortFilms = (films, type, isAscending = true) => {
  switch (type) {
    case SORT_DATE:
      return sortByDate(films, isAscending)
    case SORT_TITLE:
      console.log('BY TITLE!')
      return sortByTitle(films, isAscending)
  }
}

const sortByTitle = (films, isAscending) => {
  return [...films].sort((previous, next) => {
    if (isAscending) {
      return previous.title.localeCompare(next.title)
    }
    return next.title.localeCompare(previous.title)
  })
}

const sortByDate = (films, isAscending) => {
  return [...films].sort((previous, next) => {
    if (isAscending) {
      return previous.seen - next.seen
    }
    return next.seen - previous.seen
  })
}
