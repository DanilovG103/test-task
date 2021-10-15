import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from 'src/api/config'
import { Message, Messages } from 'src/types'

const initialState: Messages = {
  loading: false,
  messages: {
    items: [],
  },
  error: '',
}

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const response = await fetch(`${baseUrl}/messages`)
    return await response.json()
  },
)

const setUnread = (items: Message[]) => {
  const newMessages = items.map((item) => ({
    ...item,
    unread: {
      status: Math.random() > 0.5,
      count: Math.ceil(Math.random() * 10),
    },
  }))

  return newMessages
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setRead(state, { payload }) {
      state.messages.items
        .filter((item) => item.id === payload)
        .map((item) => (item.unread.status = false))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getMessages.fulfilled, (state, { payload }) => {
      state.messages.items = setUnread(payload)
      state.loading = false
    })

    builder.addCase(getMessages.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  },
})

export default messageSlice.reducer
export const { setRead } = messageSlice.actions
