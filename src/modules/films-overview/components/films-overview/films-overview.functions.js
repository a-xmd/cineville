export const sortByTitle = (films, isAscending = true) => {
  return [...films].sort((previous, next) => {
    if (isAscending) {
      return previous.title.localeCompare(next.title)
    }
    return next.title.localeCompare(previous.title)
  })
}
