interface SessionData {
  count: number
  items: Session[]
}

export type Session = {
  id: string
  class: string
  time: string
  day: number
  description: string
  dayOfWeek: string
  month: string
}

export interface Message {
  id: string
  name: string
  avatar: string
  content: string
  time: string
  unread: {
    status: boolean
    count: number
  }
}

export interface Messages {
  loading: boolean
  messages: {
    items: Message[]
  }
  error?: string
}

export interface Stories {
  loading: boolean
  stories: {
    items: Story[]
  }
  error?: string
}

export interface Sessions {
  loading: boolean
  sessions: SessionData
  error?: string
}

export interface Story {
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
  messages: Messages
  stories: Stories
  user: User
}
