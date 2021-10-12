interface SessionsProps {
  id: string
  class: string
  time: string
  day: number
  description: string
  dayOfWeek: string
  month: string
}

export interface MessagesProps {
  id: string
  name: string
  avatar: string
  content: string
  time: string
}

interface StoriesProps {
  id: string
  name: string
  avatar: string
}

export interface AppState {
  sessions: SessionsProps[]
  messages: MessagesProps[]
  stories: StoriesProps[]
}

export type State = {
  data: AppState
}
