import { createSelector } from '@reduxjs/toolkit'
import { selectApp } from './app'

export const selectMessages = createSelector(
  selectApp,
  (state) => state.messages,
)
