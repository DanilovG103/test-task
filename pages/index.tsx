import type { NextPage } from 'next'
import styled from 'styled-components'

import { Layout } from 'src/components/Layout'
import { colors } from 'src/theme/colors'
import { ActivePrograms } from 'src/components/activePrograms'
import { Research } from 'src/components/research'
import { Sessions } from 'src/components/sessions'
import { MessagesContent } from 'src/components/messages'

const Greeting = styled.p`
  color: ${colors.purple[0]};
  font-size: 21px;
  font-weight: 700;
`

const Wrapper = styled.div`
  display: grid;
  gap: 2em 2em;
  grid-template-columns: 25% 42% 28%;
  grid-template-areas:
    'programs programs messages'
    'research sessions messages';
  @media (max-width: 415px) {
    grid-template-areas:
      'programs'
      'research'
      'sessions'
      'messages';
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
        <MessagesContent />
      </Wrapper>
    </Layout>
  )
}

export default Home
