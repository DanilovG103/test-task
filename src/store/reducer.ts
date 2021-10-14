import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AppState } from 'src/types'

const initialState: AppState = {
  sessions: {
    count: 0,
    items: [],
  },
  messages: [],
  stories: [],
}

export const getSessions = createAsyncThunk(
  'sessions/getSessions',
  async (limit: number) => {
    const response = await fetch(
      `https://6162c0b8c483380017300717.mockapi.io/api/v1/sessions?p=1&l=${limit}`,
    )
    return await response.json()
  },
)

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const response = await fetch(
      'https://6162c0b8c483380017300717.mockapi.io/api/v1/messages',
    )
    return await response.json()
  },
)

export const getStories = createAsyncThunk('stories/getStories', async () => {
  const response = await fetch(
    'https://6162c0b8c483380017300717.mockapi.io/api/v1/stories',
  )
  return await response.json()
})

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSessions.fulfilled, (state, { payload }) => {
      state.sessions.count = payload.count
      state.sessions.items = payload.items
    })

    builder.addCase(getMessages.fulfilled, (state, { payload }) => {
      state.messages = payload
    })

    builder.addCase(getStories.fulfilled, (state, { payload }) => {
      state.stories = payload
    })
  },
})

export default dataSlice.reducer
