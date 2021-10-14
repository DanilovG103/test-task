import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from 'src/api/config'
import { Sessions } from 'src/types'

const initialState: Sessions = {
  loading: false,
  sessions: {
    count: 0,
    items: [],
  },
  error: '',
}

export const getSessions = createAsyncThunk(
  'sessions/getSessions',
  async (page: number) => {
    const response = await fetch(`${baseUrl}/sessions?p=${page}&l=3`)
    return await response.json()
  },
)

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSessions.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getSessions.fulfilled, (state, { payload }) => {
      state.sessions.count = payload.count
      state.sessions.items = state.sessions.items.concat(payload.items)
      state.loading = false
    })

    builder.addCase(getSessions.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  },
})

export default sessionsSlice.reducer
