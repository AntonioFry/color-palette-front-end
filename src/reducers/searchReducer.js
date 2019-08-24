export const searchReducer = (state='', action) => {
  const {type, payload} = action
  switch (type) {
    case 'SEARCH':
      return payload.search
    default:
      return state
  }
}