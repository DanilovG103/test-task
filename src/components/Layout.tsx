import React, { ReactNode } from "react"
import Head from 'next/head'
import { AsideMenu } from "./AsideMenu"
import { Header } from "./Header"
import styled from "styled-components"

interface LayoutProps {
    title: string
    children: ReactNode
}

const Wrapper = styled.div`
    padding: 50px 50px 50px 270px;
`

export const Layout = ({ children, title }: LayoutProps) => {
    return(
        <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
        </Head>
        <main>
            <AsideMenu />
            <Header />
            <Wrapper>
            {children}

            </Wrapper>
        </main>
        </>
    )
}