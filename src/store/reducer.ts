import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessions: [],
  messages: [],
}

export const getSessions = createAsyncThunk('sessions/getSessions',
  async (page: number) => {
    const response = await fetch(`https://6162c0b8c483380017300717.mockapi.io/api/v1/sessions?p=${page}&l=3`)
    return await response.json()
  }
)

export const getMessages = createAsyncThunk('messages/getMessages',
  async () => {
    const response = await fetch('https://6162c0b8c483380017300717.mockapi.io/api/v1/messages')
    return await response.json()
  }
)

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSessions.fulfilled ,( state, { payload } ) => {
      state.sessions = state.sessions.concat(payload)
    })
    builder.addCase(getMessages.fulfilled, (state, { payload }) => {
      state.messages = payload
    })
  }
})

export default dataSlice.reducer