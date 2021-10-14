import { createSelector } from '@reduxjs/toolkit'
import { selectApp } from './app'

export const selectStories = createSelector(selectApp, (state) => state.stories)
