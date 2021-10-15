import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from 'src/components/Layout'
import { MessagesContent } from 'src/components/messages'

const Messages = () => {
  const { pathname } = useRouter()
  const isMessagesPage = pathname === '/messages'

  return (
    <Layout isMessagesPage={isMessagesPage} title="Messages">
      <MessagesContent />
    </Layout>
  )
}

export default Messages
