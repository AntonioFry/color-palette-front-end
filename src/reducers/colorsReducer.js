export const colorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_COLORS':
      return [...action.colors];

    case 'LOCKING_COLOR':
      const newColors = state.map(color => {
        if (action.id === color.id) {
          color.locked = !color.locked
        }
        return color
      });
      return newColors

    default:
      return state;
  }
}