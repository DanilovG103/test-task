import { createSelector } from '@reduxjs/toolkit'
import { selectApp } from './app'

export const selectSessions = createSelector(
  selectApp,
  (state) => state.sessions,
)
