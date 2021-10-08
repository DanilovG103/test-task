import type { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '../src/components/Layout'
import { Header } from '../src/components/Header'
import { Colors } from '../src/theme/colors'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Header />
    </Layout>
  )
}

export default Home
