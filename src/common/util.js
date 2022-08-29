/**
 *
 * @param {*} path
 * @returns
 */
export const getPublicDirLink = (path) => {
  if (
    !process.env.NEXT_PUBLIC_IS_LOCAL_PRODUCTION &&
    process.env.NODE_ENV === 'production'
  ) {
    return path
  }
  return `${process.env.NEXT_PUBLIC_PATH}${path}`
}
