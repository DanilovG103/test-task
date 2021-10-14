import { configureStore, combineReducers } from '@reduxjs/toolkit'
import messagesReducer from 'src/store/reducers/message'
import storiesReducer from 'src/store/reducers/stories'
import sessionsReducer from 'src/store/reducers/sessions'

const rootReducer = combineReducers({
  messages: messagesReducer,
  stories: storiesReducer,
  sessions: sessionsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
