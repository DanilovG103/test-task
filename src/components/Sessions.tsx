import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getSessions } from 'src/store/reducer'
import { selectSessions } from 'src/store/selectors/selectSessions'
import { Colors } from 'src/theme/colors'
import { SessionBlock } from './SessionBlock'

const Wrapper = styled.div`
  grid-area: sessions;
  background-color: ${Colors.white};
  padding: 15px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 380px;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Title = styled.p`
  font-weight: 500;
  color: ${Colors.purple[0]};
  font-size: 16px;
`

const Info = styled.p`
  color: ${Colors.gray[5]};
  margin-top: 20px;
`

const AddSessions = styled.a`
  cursor: pointer;
  color: ${Colors.purple[1]};
  font-weight: 600;
  align-self: flex-end;
  margin-top: 35px;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.5fr;
  grid-column-gap: 1em;
  grid-row-gap: 2em;
`

const Dots = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  top: 25px;
  @media (max-width: 400px) {
    display: flex;
  }
`

const Dot = styled.i`
  width: 3px;
  height: 3px;
  background-color: ${Colors.gray[1]};
  border-radius: 50%;
  margin: 0 2px;
`

export const Sessions = () => {
  const [page, setPage] = useState(3)
  const sessions = useSelector(selectSessions)
  const hasMore = sessions.items.length < sessions.count
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSessions(page))
  }, [dispatch, page])

  return (
    <Wrapper>
      <Title>Upcoming Sessions</Title>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <Container>
        <Info>Date</Info>
        <Info>Class</Info>
        <Info>Time</Info>
        {sessions.items.map((item) => (
          <SessionBlock item={item} />
        ))}
      </Container>
      {hasMore && (
        <AddSessions onClick={() => setPage((prev) => prev + 3)}>
          See All Sessions
        </AddSessions>
      )}
    </Wrapper>
  )
}
