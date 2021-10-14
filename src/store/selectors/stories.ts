import { createSelector } from 'reselect'
import { selectApp } from './app'

export const selectStories = createSelector(selectApp, (state) => state.stories)
