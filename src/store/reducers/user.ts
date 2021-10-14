import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseUrl } from 'src/api/config'
import { User } from 'src/types'

const initialState: User = {
  loading: false,
  user: undefined,
  error: '',
}

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await fetch(`${baseUrl}/user`)
  return await response.json()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload
      state.loading = false
    })

    builder.addCase(getUser.rejected, (state, { error }) => {
      state.loading = false
      state.error = error.message
    })
  },
})

export default userSlice.reducer
