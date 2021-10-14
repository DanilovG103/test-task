import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from 'src/api/config'
import { Message } from 'src/types'

const initialState: Message = {
  loading: false,
  messages: [],
  error: '',
}

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const response = await fetch(`${baseUrl}/messages`)
    return await response.json()
  },
)

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getMessages.fulfilled, (state, { payload }) => {
      state.messages = payload
      state.loading = false
    })

    builder.addCase(getMessages.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  },
})

export default messageSlice.reducer
