import {combineReducers} from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { throwErrorReducer } from './throwErrorReducer';
import { projectReducer } from './projectReducer';
import { paletteReducer } from './paletteReducer';

export const rootReducer = combineReducers({
  isloading: isLoadingReducer,
  throwError: throwErrorReducer,
  projects: projectReducer,
  palettes: paletteReducer
})

//add user reducer, search query later