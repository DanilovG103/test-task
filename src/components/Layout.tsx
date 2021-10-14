import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { AsideMenu } from 'src/components/navigation/AsideMenu'
import { Header } from 'src/components/navigation/Header'
import { BottomNav } from 'src/components/navigation/BottomNav'

interface LayoutProps {
  title: string
  isMessagesPage?: boolean
  children: ReactNode
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr;
  grid-template-rows: 0.1fr 1fr 1fr;
  grid-template-areas:
    'aside header header'
    'aside main main'
    'aside main main';
  @media (max-width: 415px) {
    grid-template-columns: 0.1fr 1fr;
    grid-template-areas:
      'aside header'
      'main main';
    grid-template-rows: 0.1fr 1fr;
  }
`

const Main = styled.main<{ isMessagesPage: boolean }>`
  grid-area: main;
  padding: 35px;
  @media (max-width: 415px) {
    padding: ${(props) => (props.isMessagesPage ? '0' : '25px 15px')};
  }
`

export const Layout = ({
  children,
  title,
  isMessagesPage = false,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <Wrapper>
        <AsideMenu />
        <Header />
        <Main isMessagesPage={isMessagesPage}>{children}</Main>
      </Wrapper>
      <BottomNav />
    </>
  )
}
