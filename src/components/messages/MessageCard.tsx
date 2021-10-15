import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/theme/colors'
import { Message } from 'src/types'
import { setRead } from 'src/store/reducers/messages'
import { useDispatch } from 'react-redux'

interface Props {
  message: Message
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

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 5px 10px;
`

const TextWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Name = styled.p<StyleProps>`
  color: ${colors.purple[0]};
  font-size: 13px;
  font-weight: ${(props) => (props.unread ? 600 : 500)};
`

const Content = styled(Name)`
  color: ${(props) => (props.unread ? colors.purple[0] : colors.gray[1])};
  font-weight: ${(props) => (props.unread ? 600 : 400)};
`

const Avatar = styled.img`
  width: 55px;
  height: 55px;
`

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

export const MessageCard = ({ message }: Props) => {
  const dispatch = useDispatch()

  return (
    <Container onClick={() => dispatch(setRead(message.id))}>
      <Avatar src={message.avatar} alt={message.name} />
      <div>
        <ContentRow>
          <Name unread={message.unread.status}>{message.name}</Name>
          <Time>{message.time}</Time>
        </ContentRow>
        <ContentRow>
          <TextWrapper>
            <Content unread={message.unread.status}>{message.content}</Content>
          </TextWrapper>
          {message.unread.status && (
            <MessagesCount>{message.unread.count}</MessagesCount>
          )}
        </ContentRow>
      </div>
    </Container>
  )
}
