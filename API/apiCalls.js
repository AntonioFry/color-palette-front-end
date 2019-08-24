export const getProjects = async () => {
  try {
    const response = await fetch('https://palette-picker-database.herokuapp.com/api/v1/projects');
    const result =  await response.json();

    return result
  } catch(error) {
    throw new Error('failed to fetch projects');
  }
}

export const getPalettes = async () => {
  try {
    const response = await fetch('https://palette-picker-database.herokuapp.com/api/v1/palettes');
    const result = await response.json();

    return result
  } catch (error) {
    throw new Error('failed to fetch palettes');
  }
}

export const postProject = async (project) => {
  const option = {
    method: 'POST',
    body: {
      ...project
    }
  }
  try {
    const response = await fetch('https://palette-picker-database.herokuapp.com/api/v1/projects');
    const result = response.json();
    console.log(result)
  } catch (error) {
    throw new Error('failed to post project')
  }
}

export const postPalette = async (palette) => {
  const option = {
    method: 'POST',
    body: {
      ...palette
    }
  }
  try {
    const response = await fetch('https://palette-picker-database.herokuapp.com/api/v1/palettes');
    const result = response.json();
  } catch (error) {
    throw new Error('failed to post palette')
  }
}

export const patchProject = async () => {
  try {

  } catch (error) {

  }
}

export const patchPalette = async () => {
  try {

  } catch (error) {

  }
}

export const deleteProject = async () => {
  try {

  } catch (error) {

  }
}

export const deletePalette = async () => {
  try {

  } catch (error) {

  }
}