import { State, StoriesProps } from "src/types"

export const selectStories = (state: State): StoriesProps[] => state.data.stories