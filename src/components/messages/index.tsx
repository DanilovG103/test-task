import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Image from 'next/image'

import { getMessages } from 'src/store/reducer'
import { colors } from 'src/theme/colors'
import { Stories } from 'src/components/stories'
import { selectMessages } from 'src/store/selectors/selectMessages'

import User from 'assets/images/User.png'
import { MessageCard } from './MessageCard'
import { BackButton } from 'assets/icons/BackButton'
import { useRouter } from 'next/dist/client/router'

const Wrapper = styled.div<{ shouldHideMessages: boolean }>`
  grid-area: messages;
  background-color: ${colors.white};
  border-radius: 20px;
  margin-top: 10px;
  position: relative;
  @media (max-width: 415px) {
    display: ${(props) => (props.shouldHideMessages ? 'block' : 'none')};
    margin: 0;
    border-radius: 0;
  }
`

const Block = styled.div`
  background-color: ${colors.gray[3]};
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 20px 20px 0 0;
  @media (max-width: 415px) {
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
  @media (max-width: 415px) {
    display: none;
  }
`

const BackButtonWrapper = styled.div`
  display: none;
  @media (max-width: 415px) {
    display: block;
    margin-top: 3px;
    margin-right: 15px;
  }
`

export const MessagesContent = () => {
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()
  const loading = messages.length < 1
  const { back, pathname } = useRouter()
  const shouldHideMessages = pathname === '/messages'

  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])

  return (
    <Wrapper shouldHideMessages={shouldHideMessages}>
      <Block>
        <ImageWrapper>
          <Image src={User} width={29} height={29} />
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
        {messages.map((item) => (
          <MessageCard message={item} key={item.id} />
        ))}
      </MessagesWrapper>
    </Wrapper>
  )
}
