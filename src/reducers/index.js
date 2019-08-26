import {combineReducers} from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { projectsReducer } from './projectsReducer';
import { palettesReducer } from './palettesReducer';
import { searchReducer } from './searchReducer';
import { colorsReducer } from './colorsReducer';

export const rootReducer = combineReducers({
  isloading: isLoadingReducer,
  throwError: throwErrorReducer,
  projects: projectsReducer,
  palettes: palettesReducer,
  search: searchReducer,
  currentColors: colorsReducer
})
