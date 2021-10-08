import type { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '../src/components/Layout'
import { Colors } from '../src/theme/colors'
import { Logo } from '../src/assets/icons/Logo'

const AsideMenu = styled.aside`
  background: ${Colors.purple};
  float: left;
  min-height: 100vh;
`

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <AsideMenu>
        <Logo />
      </AsideMenu>
    </Layout>
  )
}

export default Home
