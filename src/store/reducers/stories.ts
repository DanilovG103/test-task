import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from 'src/api/config'
import { Stories } from 'src/types'

const initialState: Stories = {
  loading: false,
  stories: {
    items: [],
  },
  error: '',
}

export const getStories = createAsyncThunk('stories/getStories', async () => {
  const response = await fetch(`${baseUrl}/stories`)
  return await response.json()
})

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStories.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getStories.fulfilled, (state, { payload }) => {
      state.stories = payload
      state.loading = false
    })

    builder.addCase(getStories.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  },
})

export default storiesSlice.reducer
