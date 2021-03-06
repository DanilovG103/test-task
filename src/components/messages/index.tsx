import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { Stories } from 'src/components/stories'
import { MessageCard } from 'src/components/messages/MessageCard'
import { BackButton } from 'src/components/icons/BackButton'
import { getMessages } from 'src/store/reducers/messages'
import { selectMessages } from 'src/store/selectors/messages'
import { selectUser } from 'src/store/selectors/user'
import { colors } from 'src/theme/colors'

const Wrapper = styled.div<{ shouldHideMessages: boolean }>`
  grid-area: messages;
  background-color: ${colors.white};
  border-radius: 20px;
  margin-top: 10px;
  position: relative;
  @media (max-width: 768px) {
    display: ${(props) => (props.shouldHideMessages ? 'block' : 'none')};
    margin: 0;
    margin-bottom: 60px;
    border-radius: 0;
  }
`

const Block = styled.div`
  background-color: ${colors.gray[3]};
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 20px 20px 0 0;
  @media (max-width: 768px) {
    border-radius: 0;
    height: 60px;
  }
`

const Title = styled.p`
  color: ${colors.purple[0]};
  font-size: 16px;
  font-weight: 500;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.gray[2]};
`

const MessagesWrapper = styled.div`
  max-height: 560px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    max-height: none;
  }
`

const Circle = styled.div`
  background-color: ${colors.green[0]};
  position: relative;
  right: 8px;
  top: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const ImageWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`

const BackButtonWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-top: 3px;
    margin-right: 15px;
  }
`

const Avatar = styled.img`
  width: 29px;
  height: 29px;
`

const NoMessages = styled.p`
  font-size: 16px;
  color: ${colors.darkBlue};
  text-align: center;
`

export const MessagesContent = () => {
  const { messages, loading, error } = useSelector(selectMessages)
  const { user } = useSelector(selectUser)
  const dispatch = useDispatch()
  const { back, pathname } = useRouter()
  const hasMessages = messages.items.length !== 0
  const shouldHideMessages = pathname === '/messages'
  const userAvatar = user && user[0].avatar
  const userName = user && user[0].name

  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])

  return (
    <Wrapper shouldHideMessages={shouldHideMessages}>
      <Block>
        <ImageWrapper>
          <Avatar src={userAvatar} alt={userName} />
          <Circle />
        </ImageWrapper>
        <BackButtonWrapper onClick={back}>
          <BackButton />
        </BackButtonWrapper>
        <Title>Messages</Title>
      </Block>
      <Line />
      <Stories messagesLoading={loading} />
      <MessagesWrapper>
        {hasMessages &&
          messages.items.map((item) => (
            <MessageCard message={item} key={item.id} />
          ))}
        {!hasMessages && <NoMessages>No messages</NoMessages>}
        {error}
      </MessagesWrapper>
    </Wrapper>
  )
}
