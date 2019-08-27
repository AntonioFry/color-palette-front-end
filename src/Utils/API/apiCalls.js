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
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(project)
  }
  try {
    const response = await fetch('https://palette-picker-database.herokuapp.com/api/v1/projects', options);
    return await response.json();
  } catch (error) {
    throw new Error(`failed to post project: ${error.message}`)
  }
}

export const postPalette = async (palette, projectName) => {
  const body = {
    palette,
    projectName
  }
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  try {
    const response = await fetch('https://palette-picker-database.herokuapp.com/api/v1/palettes', options);
    // const result = await response.json();
    // return await result.json();
  } catch (error) {
    throw new Error(`failed to post palette: ${error.message}`)
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

export const deleteProject = async (id) => {
  const body = {
    id
  }
  const options = {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  try {
    const response = await fetch(`https://palette-picker-database.herokuapp.com/api/v1/projects/${id}`, options);
  } catch (error) {
    throw new Error(`failed to delete project: ${error.message}`)
  }
}

export const deletePalette = async (id, removePalette) => {
  const body = {
    id
  }
  const options = {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
  try {
    const response = await fetch(`https://palette-picker-database.herokuapp.com/api/v1/palettes/${id}`, options);
  } catch (error) {
    throw new Error(`failed to delete palette: ${error.message}`)
  }
}

//custom endpoint needed 