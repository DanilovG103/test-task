import { createSelector } from 'reselect'
import { selectApp } from './app'

export const selectSessions = createSelector(
  selectApp,
  (state) => state.sessions,
)
