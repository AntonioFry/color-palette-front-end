export const projectsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_PROJECTS':
    return [...state, ...payload.projects]
    case 'ADD_PROJECT':
      return [...state, payload.newProject]
    
    case 'DELETE_PROJECT':
      return state.filter(project => project.id !== payload.id)
    
    default:
      return state;
  }
};