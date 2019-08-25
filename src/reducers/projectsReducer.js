export const projectsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PROJECTS':
      return action.projects
    
    case 'ADD_PROJECT':
      return [...state, payload.newProject]
    
    case 'DELETE_PROJECT':
      return state.filter(project => project.id !== payload.id)
    
    default:
      return state;
  }
};