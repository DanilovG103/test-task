import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from '../theme/colors'
import User from '../../assets/images/User.png'
import { NotificationsIcon } from '../../assets/icons/Notifications'

const HeaderBlock = styled.header`
  grid-area: header;
  background-color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
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
`

export const Header = () => {
  return (
    <HeaderBlock>
      <IconWrapper>
        <NotificationsIcon />
      </IconWrapper>
      <Image src={User}/>
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
