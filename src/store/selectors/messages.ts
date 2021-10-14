import { createSelector } from 'reselect'
import { selectApp } from './app'

export const selectMessages = createSelector(
  selectApp,
  (state) => state.messages,
)
