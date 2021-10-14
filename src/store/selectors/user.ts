import { selectApp } from './app'
import { createSelector } from '@reduxjs/toolkit'

export const selectUser = createSelector(selectApp, (state) => state.user)
