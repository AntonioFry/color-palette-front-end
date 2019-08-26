export const palettesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_PALETTES':
    return [...state, ...payload.palettes]

    case 'ADD_PALETTE':
      return [...state, payload.newPalette]

    case "DELETE_PALETTE":
      return state.filter(palette => palette.id !== payload.id)
    
    default:
      return state;
  }
};