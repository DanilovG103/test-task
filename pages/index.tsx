import type { NextPage } from 'next'
import styled from 'styled-components'

import { Layout } from 'src/components/Layout'
import { Colors } from 'src/theme/colors'
import { ActivePrograms } from 'src/components/ActivePrograms'
import { Research } from 'src/components/Research'
import { Sessions } from 'src/components/Sessions'
import { Messages } from 'src/components/Messages'

const Greeting = styled.p`
  color: ${Colors.purple[0]};
  font-size: 21px;
  font-weight: 700;
`

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  grid-template-columns: 25% 42% 28%;
  grid-template-areas:
    'programs programs messages'
    'research sessions messages';
  @media (max-width: 400px) {
    grid-template-areas:
      'programs'
      'research'
      'sessions';
    grid-template-columns: 1fr;
  }
`

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Greeting>Hello, Mia!</Greeting>
      <Wrapper>
        <ActivePrograms />
        <Research />
        <Sessions />
        <Messages />
      </Wrapper>
    </Layout>
  )
}

export default Home
