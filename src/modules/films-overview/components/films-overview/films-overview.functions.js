import { SORT_DATE, SORT_TITLE, SORT_SCORE } from './films-overview.constants'

export const sortFilms = (films, type, isAscending = true) => {
  switch (type) {
    case SORT_DATE:
      return sortByDate(films, isAscending)
    case SORT_TITLE:
      return sortByTitle(films, isAscending)
  }
}

const sortByTitle = (films, isAscending) => {
  return [...films].sort((previous, next) => {
    // if film has sortableTitle property, use that
    const previousTitle = previous.sortableTitle || previous.title
    const nextTitle = next.sortableTitle || next.title

    if (isAscending) {
      return previousTitle.localeCompare(nextTitle)
    }
    return nextTitle.localeCompare(previousTitle)
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
