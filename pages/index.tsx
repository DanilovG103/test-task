import type { NextPage } from 'next'
import styled from 'styled-components'

import { Layout } from 'src/components/Layout'
import { colors } from 'src/theme/colors'
import { ActivePrograms } from 'src/components/activePrograms'
import { Research } from 'src/components/research'
import { Sessions } from 'src/components/sessions'
import { MessagesContent } from 'src/components/messages'
import { useSelector } from 'react-redux'
import { selectUser } from 'src/store/selectors/user'

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
  @media (max-width: 768px) {
    grid-template-areas:
      'programs'
      'research'
      'sessions'
      'messages';
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.2fr 1fr 0.1fr;
  }
`

const Container = styled.div`
  padding: 35px;
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
`

const Home: NextPage = () => {
  const { user } = useSelector(selectUser)
  const userName = user && user[0].name

  return (
    <Layout title="Home">
      <Container>
        <Greeting>Hello, {userName}!</Greeting>
        <Wrapper>
          <ActivePrograms />
          <Research />
          <Sessions />
          <MessagesContent />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Home
