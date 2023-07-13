export const getPageCount = (totalCount = 100, limit) => {
  return Math.ceil(totalCount / limit)
}
