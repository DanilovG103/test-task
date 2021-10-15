interface SessionsProps {
  count: number
  items: SessionsItem[]
}

export type SessionsItem = {
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

export interface Message {
  loading: boolean
  messages: MessagesProps[]
  error?: string
}

export interface Stories {
  loading: boolean
  stories: StoriesProps[]
  error?: string
}

export interface Sessions {
  loading: boolean
  sessions: SessionsProps
  error?: string
}

export interface StoriesProps {
  id: string
  name: string
  avatar: string
}

interface UserProps {
  id: string
  name: string
  surname: string
  avatar: string
}

export interface User {
  loading: boolean
  error?: string
  user: UserProps[] | undefined
}

export interface AppState {
  sessions: Sessions
  messages: Message
  stories: Stories
  user: User
}
