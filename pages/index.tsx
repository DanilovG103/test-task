import type { NextPage } from 'next'
import styled from 'styled-components'
import { Layout } from '../src/components/Layout'
import { Colors } from '../src/theme/colors'
import { ActivePrograms } from '../src/components/ActivePrograms'
import { Research } from '../src/components/Research'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getSessions } from '../src/store/reducer'
import { Sessions } from '../src/components/Sessions'

const Greeting = styled.p`
  color: ${Colors.purple[0]};
  font-size: 21px;
  font-weight: 700;
`

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 2em;
  grid-column-gap: 2em;
  grid-template-columns: 0.8fr 1fr 0.8fr;
  grid-template-areas: "programs programs messages"
                       "research sessions messages";
`


const Second = styled.div`
  grid-area: messages;
  background-color: ${Colors.white};
  border-radius: 20px;
  margin-top: 20px;
`

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Greeting>Hello, Mia!</Greeting>
      <Wrapper>
        <ActivePrograms />
        <Research />
        <Sessions />
        <Second>Messages</Second>
      </Wrapper>
    </Layout>
  )
}

export default Home
