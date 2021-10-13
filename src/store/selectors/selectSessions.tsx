import { State, SessionsProps } from 'src/types'

export const selectSessions = (state: State): SessionsProps =>
  state.data.sessions
