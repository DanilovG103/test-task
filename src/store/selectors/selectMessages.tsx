import { State, MessagesProps } from "src/types"

export const selectMessages = (state: State): MessagesProps[] => state.data.messages