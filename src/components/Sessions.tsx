import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { SessionsProps } from '../../pages/api/types'
import { getSessions } from '../store/reducer'
import { Colors } from '../theme/colors'

const Wrapper = styled.div`
  grid-area: sessions;
  background-color: ${Colors.white};
  padding: 15px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 330px;
`

const Title = styled.p`
  font-weight: 500;
  color: ${Colors.purple[0]};
  font-size: 16px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
`

const Info = styled.p`
  color: ${Colors.gray[5]};
  margin-top: 20px;
`

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DayOfWeek = styled.p`
  font-size: 10px;
  color: ${Colors.purple[1]};
`

const Day = styled.p`
  color: ${Colors.gray[4]};
  font-size: 18px;
  font-weight: 700;
`

const Month = styled(Day)`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`

const ClassBlock = styled(DateBlock)`
  align-items: flex-start;
`

const Class = styled.p`
  color: ${Colors.dark};
  font-size: 12px;
  font-weight: 500;
`

const Description = styled.p`
  color: ${Colors.gray[4]};
  font-size: 11px;
`

const TimeBlock = styled.div`
  border-radius: 11px;
  background: ${Colors.gray[6]};
  padding: 5px;
`

const Time = styled.p`
  color: ${Colors.purple[0]};
  font-size: 9px;
  font-weight: 600;
`

const AddSessions = styled.a<{isNoData: boolean}>`
  display: ${props => props.isNoData ? 'none' : 'block'};
  cursor: pointer;
  color: ${Colors.purple[1]};
  font-weight: 600;
  align-self: flex-end;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-column-gap: 1em;
  grid-row-gap: 2em;
`

export const Sessions = () => {
  const [page, setPage] = useState(1)
  const { sessions } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSessions(page))
  },[dispatch, page])

  return (
    <Wrapper>
      <Title>Upcoming Sessions</Title>
      <Container>
      <Info>Date</Info>
      <Info>Class</Info>
      <Info>Time</Info>
      {(sessions as SessionsProps[]).map(item => (
        <Row key={item.id}>
          <DateBlock>
            <DayOfWeek>{item.dayOfWeek}</DayOfWeek>
            <Day>{item.day.toString().length < 2 ? `0${item.day}` : item.day}</Day>
            <Month>{item.month}</Month>
          </DateBlock>
          <ClassBlock>
            <Class>{item.class}</Class>
            <Description>{item.description}</Description>
          </ClassBlock>
          <TimeBlock>
            <Time>{item.time}</Time>
          </TimeBlock>
        </Row>
      ))}
      </Container>
      <AddSessions onClick={() => setPage(prev => prev + 1)} 
        isNoData={page === 2}>
        See All Sessions
      </AddSessions>
    </Wrapper>
  )
}