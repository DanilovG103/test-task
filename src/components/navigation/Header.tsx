import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Colors } from 'src/theme/colors'
import { MessagesIcon } from 'assets/icons/Message'
import User from 'assets/images/User.png'
import { useWindowSize } from 'src/hooks/useWindowSize'

const HeaderBlock = styled.header`
  grid-area: header;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
  @media (max-width: 415px) {
    height: 50px;
    padding: 15px 5px;
  }
`

const Dot = styled.i`
  width: 3px;
  height: 3px;
  background-color: ${Colors.gray[1]};
  border-radius: 50%;
  margin: 1px 0;
`

const DotBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  @media (max-width: 415px) {
    display: none;
  }
`

const UserBlock = styled(DotBlock)`
  padding: 10px;
  margin-left: 0;
`

const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${Colors.darkBlue};
`

const Description = styled(UserName)`
  font-weight: 400;
  font-size: 12px;
`

const IconWrapper = styled.div`
  margin: 10px 25px 0;
  @media (max-width: 415px) {
    margin: 10px 0 0;
  }
`

const Circle = styled.div`
  display: none;
  background-color: ${Colors.green[0]};
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  right: 12px;
  top: 20px;
  @media (max-width: 415px) {
    display: block;
  }
`

const ImageWrapper = styled.div`
  display: flex;
`

export const Header = () => {
  const { width } = useWindowSize()
  const ImageSize = width > 400 ? 40 : 29

  return (
    <HeaderBlock>
      <Link href="/messages">
        <IconWrapper>
          <MessagesIcon />
        </IconWrapper>
      </Link>
      <ImageWrapper>
        <Image src={User} alt="User" width={ImageSize} height={ImageSize} />
        <Circle />
      </ImageWrapper>
      <UserBlock>
        <UserName>Mia V</UserName>
        <Description>Student</Description>
      </UserBlock>
      <DotBlock>
        <Dot />
        <Dot />
        <Dot />
      </DotBlock>
    </HeaderBlock>
  )
}
