export const palettesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PALETTES':
      return action.palettes

    case 'ADD_PALETTE':
      return [...state, payload.newPalette]

    case "DELETE_PALETTE":
      return state.filter(palette => palette.id !== payload.id)
    
    default:
      return state;
  }
};