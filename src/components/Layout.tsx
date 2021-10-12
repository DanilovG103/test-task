import React, { ReactNode } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { AsideMenu } from 'src/components/AsideMenu'
import { Header } from 'src/components/Header'

interface LayoutProps {
  title: string
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
`

const Main = styled.main`
  grid-area: main;
  padding: 35px;
`

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <Wrapper>
        <AsideMenu />
        <Header />
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}
