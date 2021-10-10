import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from './reducer'

const rootReducer = combineReducers({
  data: dataReducer
})

export const store = configureStore({
  reducer: rootReducer,
})