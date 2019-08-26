export const throwError = error => ({
  type: 'THROW_ERROR',
  payload: {
    error
  }
});

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  payload: {
    isLoading
  }
});

export const search = searchWord => ({
  type: 'SEARCH',
  payload: {
    searchWord
  }
});

export const addProject = project => ({
  type: 'ADD_PROJECT',
  payload: {
    project
  }
});

export const addPalette = palette => ({
  type: 'ADD_PALETTE',
  payload: {
    palette
  }
});

export const addProjects = projects => ({
  type: 'ADD_PROJECTS',
  payload: {
    projects
  }
});

export const addPalettes = palettes => ({
  type: 'ADD_PALETTES',
  payload: {
    palettes 
  }
});

export const removeProject = id => ({
  type: 'REMOVE_PROJECT',
  payload: {
    id
  }
});

export const removePalette = id => ({
  type: 'REMOVE_PALETTE',
  payload: {
    id
  }
});