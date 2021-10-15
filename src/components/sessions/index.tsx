import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { SessionBlock } from 'src/components/sessions/SessionBlock'
import { Loading } from 'src/components/Loading'
import { getSessions } from 'src/store/reducers/sessions'
import { selectSessions } from 'src/store/selectors/sessions'
import { colors } from 'src/theme/colors'

const Wrapper = styled.div`
  grid-area: sessions;
  background-color: ${colors.white};
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
  color: ${colors.purple[0]};
  font-size: 16px;
`

const Info = styled.p`
  color: ${colors.gray[5]};
  margin-top: 20px;
`

const AddSessions = styled.a`
  cursor: pointer;
  color: ${colors.purple[1]};
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
  @media (max-width: 415px) {
    display: flex;
  }
`

const Dot = styled.i`
  width: 3px;
  height: 3px;
  background-color: ${colors.gray[1]};
  border-radius: 50%;
  margin: 0 2px;
`

const LoaderWrapper = styled.div`
  position: absolute;
  left: 45%;
`

const NoSessions = styled.p`
  color: ${colors.darkBlue};
  font-size: 16px;
  text-align: center;
`

export const Sessions = () => {
  const [page, setPage] = useState(1)
  const { sessions, loading, error } = useSelector(selectSessions)
  const hasSessions = sessions.items.length !== 0
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
        {hasSessions &&
          sessions.items.map((item) => (
            <SessionBlock item={item} key={item.id} />
          ))}
        {!hasSessions && <NoSessions>No sessions</NoSessions>}
        {error}
      </Container>
      {loading && (
        <LoaderWrapper>
          <Loading />
        </LoaderWrapper>
      )}
      {hasMore && (
        <AddSessions onClick={() => setPage((prev) => prev + 1)}>
          See All Sessions
        </AddSessions>
      )}
    </Wrapper>
  )
}
