import React, { ReactNode } from "react"
import Head from 'next/head'

interface LayoutProps {
    title: string
    children: ReactNode
}

export const Layout = ({ children, title }: LayoutProps) => {
    return(
        <>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
        </Head>
        <main>  
            {children}
        </main>
        </>
    )
}