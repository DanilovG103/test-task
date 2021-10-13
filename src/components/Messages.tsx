import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Image from 'next/image'

import { getMessages } from 'src/store/reducer'
import { Colors } from 'src/theme/colors'
import { Stories } from 'src/components/Stories'
import { selectMessages } from 'src/store/selectors/selectMessages'

import User from 'assets/images/User.png'
import { MessageCard } from './MessageCard'

const Wrapper = styled.div`
  grid-area: messages;
  background-color: ${Colors.white};
  border-radius: 20px;
  margin-top: 20px;
`

const Block = styled.div`
  background-color: ${Colors.gray[3]};
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 20px 20px 0 0;
`

const Title = styled.p`
  color: ${Colors.purple[0]};
  font-size: 16px;
  font-weight: 500;
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${Colors.gray[2]};
`

const MessagesWrapper = styled.div`
  height: 540px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Circle = styled.div`
  background-color: ${Colors.green[0]};
  position: relative;
  right: 8px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

export const Messages = () => {
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessages())
  }, [dispatch])

  return (
    <Wrapper>
      <Block>
        <Image src={User} width={29} height={29} />
        <Circle />
        <Title>Messages</Title>
      </Block>
      <Line />
      <Stories />
      <MessagesWrapper>
        {messages.map((item) => (
          <MessageCard message={item} key={item.id} />
        ))}
      </MessagesWrapper>
    </Wrapper>
  )
}
