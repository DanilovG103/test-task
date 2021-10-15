import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { MessagesIcon } from 'src/components/icons/Message'
import { colors } from 'src/theme/colors'
import { selectUser } from 'src/store/selectors/user'
import { getUser } from 'src/store/reducers/user'

const HeaderBlock = styled.header`
  grid-area: header;
  background-color: ${colors.white};
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
  background-color: ${colors.gray[1]};
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
  color: ${colors.darkBlue};
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

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 415px) {
    width: 29px;
    height: 29px;
  }
`

const Circle = styled.div`
  display: none;
  background-color: ${colors.green[0]};
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
  const { user } = useSelector(selectUser)
  const dispatch = useDispatch()
  const userAvatar = user && user[0].avatar
  const userName = user && user[0].name
  const userSurname = user && user[0].surname

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <HeaderBlock>
      <Link href="/messages">
        <IconWrapper>
          <MessagesIcon />
        </IconWrapper>
      </Link>
      <ImageWrapper>
        <Avatar src={userAvatar} alt={userName} />
        <Circle />
      </ImageWrapper>
      <UserBlock>
        <UserName>{userName + ' ' + userSurname}</UserName>
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
