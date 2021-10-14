import React from 'react'
import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'

import { CoursesIcon } from 'assets/icons/Courses'
import { DashboardIcon } from 'assets/icons/Dashboard'
import { Logo } from 'assets/icons/Logo'

import { Colors } from 'src/theme/colors'

interface Props {
  isActive: boolean
}

const Aside = styled.aside`
  padding: 30px 60px;
  background: ${Colors.purple[0]};
  grid-area: aside;
  min-height: 100vh;
  @media (max-width: 415px) {
    min-height: 0;
    width: 50px;
    height: 50px;
    padding: 5px;
  }
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
`

const NavBlock = styled.div`
  align-items: center;
  display: flex;
  margin: 20px 0;
  cursor: pointer;
  @media (max-width: 415px) {
    display: none;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
  @media (max-width: 415px) {
    margin: 0;
    align-self: center;
  }
`

const Title = styled.p`
  font-family: MuseoModerno;
  font-weight: 600;
  color: ${Colors.gray[0]};
  font-size: 30px;
  margin-left: 10px;
  @media (max-width: 415px) {
    display: none;
  }
`

const ActivePageLine = styled.div<Props>`
  background-color: ${Colors.red[2]};
  height: 34px;
  width: 5px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`

const NavTitle = styled.a<Props>`
  color: ${(props) => (props.isActive ? Colors.white : Colors.lightPurple)};
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  font-size: ${(props) => (props.isActive ? 18 : 15)}px;
  margin-left: 10px;
`

export const AsideMenu = () => {
  const { pathname, push } = useRouter()

  const isHomePage = pathname === '/'
  const isCoursesPage = pathname === '/courses'

  return (
    <Aside>
      <Block>
        <LogoWrapper>
          <Logo />
          <Title>Univé</Title>
        </LogoWrapper>
        <NavBlock onClick={() => push('/')}>
          <ActivePageLine isActive={isHomePage} />
          <DashboardIcon isActive={isHomePage} />
          <NavTitle isActive={isHomePage}>Dashboard</NavTitle>
        </NavBlock>
        <NavBlock onClick={() => push('/courses')}>
          <ActivePageLine isActive={isCoursesPage} />
          <CoursesIcon isActive={isCoursesPage} />
          <NavTitle isActive={isCoursesPage}>Courses</NavTitle>
        </NavBlock>
      </Block>
    </Aside>
  )
}
