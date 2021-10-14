import React from 'react'
import styled from 'styled-components'
import { CoursesIcon } from 'assets/icons/Courses'
import { DashboardIcon } from 'assets/icons/Dashboard'
import { Notifications } from 'assets/icons/Notifications'
import { Setting } from 'assets/icons/Settings'
import { useRouter } from 'next/dist/client/router'
import { Colors } from 'src/theme/colors'

const Wrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  background-color: ${Colors.white};
  min-width: 100vw;
  height: 75px;
  @media (max-width: 415px) {
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
  color: ${(props) => (props.isActive ? Colors.purple[1] : Colors.gray[1])};
  font-weight: ${(props) => (props.isActive ? 600 : 400)};
`

const Line = styled.div<{ isActive: boolean }>`
  width: 47px;
  height: 5px;
  background-color: ${Colors.purple[1]};
  border-radius: 5px;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  position: absolute;
  top: 0;
`

export const BottomNav = () => {
  const { pathname, push } = useRouter()

  const isHomePage = pathname === '/'
  const isCoursesPage = pathname === '/courses'
  const isNotificationsPage = pathname === '/notifications'
  const isSettingsPage = pathname === '/settings'

  return (
    <Wrapper>
      <NavBlock onClick={() => push('/')}>
        <Line isActive={isHomePage} />
        <DashboardIcon isActive={isHomePage} />
        <NavTitle isActive={isHomePage}>Dashboard</NavTitle>
      </NavBlock>
      <NavBlock onClick={() => push('/courses')}>
        <Line isActive={isCoursesPage} />
        <CoursesIcon isActive={isCoursesPage} />
        <NavTitle isActive={isCoursesPage}>Courses</NavTitle>
      </NavBlock>
      <NavBlock onClick={() => push('/notifications')}>
        <Line isActive={isNotificationsPage} />
        <Notifications isActive={isNotificationsPage} />
        <NavTitle isActive={isNotificationsPage}>Notifications</NavTitle>
      </NavBlock>
      <NavBlock onClick={() => push('/settings')}>
        <Line isActive={isSettingsPage} />
        <Setting isActive={isSettingsPage} />
        <NavTitle isActive={isSettingsPage}>Settings</NavTitle>
      </NavBlock>
    </Wrapper>
  )
}
