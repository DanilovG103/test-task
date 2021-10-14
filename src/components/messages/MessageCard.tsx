import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from 'src/theme/colors'
import { MessagesProps } from 'src/types'

interface Props {
  message: MessagesProps
}

interface StyleProps {
  unread: boolean
}

const Container = styled.div`
  display: flex;
  border-top: 1px solid ${colors.gray[2]};
  padding: 20px 5px;
  cursor: pointer;
  align-items: center;
`

const ContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 10px;
`

const Name = styled.p<StyleProps>`
  color: ${colors.purple[0]};
  font-size: 13px;
  font-weight: ${(props) => (props.unread ? 600 : 500)};
`

const Content = styled(Name)`
  color: ${(props) => (props.unread ? colors.purple[0] : colors.gray[1])};
  font-weight: ${(props) => (props.unread ? 600 : 400)};
  text-overflow: ellipsis;
`

const Avatar = styled.img`
  width: 55px;
  height: 55px;
`

const StatusBlock = styled(ContentBlock)``

const MessagesCount = styled.div`
  width: 25px;
  height: 25px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.purple[1]};
  color: ${colors.white};
  border-radius: 50%;
  font-weight: 500;
`

const Time = styled.p`
  font-size: 10px;
  color: ${colors.gray[7]};
`

const randomNumber = Math.ceil(Math.random() * 10)
const cropMessage = (message: string) => `${message.slice(0, 55)}...`

export const MessageCard = ({ message }: Props) => {
  const [unread, setUnread] = useState(Math.random() > 0.5)

  return (
    <Container onClick={() => setUnread(false)}>
      <Avatar src={message.avatar} alt={message.name} />
      <div>
        <ContentBlock>
          <Name unread={unread}>{message.name}</Name>
          <Time>{message.time}</Time>
        </ContentBlock>
        <StatusBlock>
          <Content unread={unread}>{cropMessage(message.content)}</Content>
          {unread && <MessagesCount>{randomNumber}</MessagesCount>}
        </StatusBlock>
      </div>
    </Container>
  )
}
