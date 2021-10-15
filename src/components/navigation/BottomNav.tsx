import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CoursesIcon } from 'src/components/icons/Courses'
import { DashboardIcon } from 'src/components/icons/Dashboard'
import { Notifications } from 'src/components/icons/Notifications'
import { Setting } from 'src/components/icons/Settings'
import { colors } from 'src/theme/colors'

const Wrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  background-color: ${colors.white};
  min-width: 100vw;
  height: 75px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const NavBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40px;
  justify-content: space-between;
`

const NavTitle = styled.a<{ isActive: boolean }>`
  font-size: 12px;
  color: ${(props) => (props.isActive ? colors.purple[1] : colors.gray[1])};
  font-weight: ${(props) => (props.isActive ? 600 : 400)};
`

const Line = styled.div`
  width: 47px;
  height: 5px;
  background-color: ${colors.purple[1]};
  border-radius: 5px;
  position: absolute;
  top: 0;
`

export const BottomNav = () => {
  const { pathname } = useRouter()

  const isHomePage = pathname === '/'
  const isCoursesPage = pathname === '/courses'
  const isNotificationsPage = pathname === '/notifications'
  const isSettingsPage = pathname === '/settings'

  return (
    <Wrapper>
      <Link href="/">
        <NavBlock>
          {isHomePage && <Line />}
          <DashboardIcon isActive={isHomePage} />
          <NavTitle isActive={isHomePage}>Dashboard</NavTitle>
        </NavBlock>
      </Link>
      <Link href="/courses">
        <NavBlock>
          {isCoursesPage && <Line />}
          <CoursesIcon isActive={isCoursesPage} />
          <NavTitle isActive={isCoursesPage}>Courses</NavTitle>
        </NavBlock>
      </Link>
      <Link href="/notifications">
        <NavBlock>
          {isNotificationsPage && <Line />}
          <Notifications isActive={isNotificationsPage} />
          <NavTitle isActive={isNotificationsPage}>Notifications</NavTitle>
        </NavBlock>
      </Link>
      <Link href="/settings">
        <NavBlock>
          {isSettingsPage && <Line />}
          <Setting isActive={isSettingsPage} />
          <NavTitle isActive={isSettingsPage}>Settings</NavTitle>
        </NavBlock>
      </Link>
    </Wrapper>
  )
}
