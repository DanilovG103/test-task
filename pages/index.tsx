import type { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '../src/components/Layout'
import { Colors } from '../src/theme/colors'
import { ActivePrograms } from '../src/components/ActivePrograms'
import { Research } from '../src/components/Research'

const Greeting = styled.p`
  color: ${Colors.purple[0]};
  font-size: 21px;
  font-weight: 700;
`

const Wrapper = styled.div`
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-auto-rows: 100px;
`


const Third = styled.div`
  grid-column-start: 2;
  background-color: ${Colors.white};
  border-radius: 20px;
`

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Greeting>Hello, Mia!</Greeting>
      <Wrapper>
        <ActivePrograms />
        <Research />
        <Third>3</Third>
      </Wrapper>
    </Layout>
  )
}

export default Home
