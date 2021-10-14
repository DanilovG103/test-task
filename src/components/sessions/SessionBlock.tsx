import React from 'react'
import styled from 'styled-components'
import { Colors } from 'src/theme/colors'
import { SessionsItems } from 'src/types'

const Row = styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 4;
`

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
`

const DayOfWeek = styled.p`
  font-size: 10px;
  color: ${Colors.purple[1]};
  @media (max-width: 415px) {
    font-size: 9px;
  }
`

const Day = styled.p`
  color: ${Colors.gray[4]};
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 415px) {
    font-size: 16px;
  }
`

const Month = styled(Day)`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 415px) {
    font-size: 9px;
  }
`

const ClassBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin-left: 30px;
  margin-right: 20px;
  @media (max-width: 415px) {
    margin-left: 10px;
    margin-right: 20px;
  }
`

const Class = styled.p`
  color: ${Colors.dark};
  font-size: 12px;
  font-weight: 500;
  @media (max-width: 415px) {
    font-size: 10px;
  }
`

const Description = styled.p`
  color: ${Colors.gray[4]};
  font-size: 11px;
  @media (max-width: 415px) {
    font-size: 9px;
  }
`

const TimeBlock = styled.div`
  border-radius: 11px;
  background: ${Colors.gray[6]};
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 90px;
  justify-self: flex-end;
`

const Time = styled.p`
  color: ${Colors.purple[0]};
  font-size: 9px;
  font-weight: 600;
  @media (max-width: 415px) {
    font-size: 8px;
  }
`

interface Props {
  item: SessionsItems
}

export const SessionBlock = ({ item }: Props) => {
  return (
    <Row>
      <DateBlock>
        <DayOfWeek>{item.dayOfWeek}</DayOfWeek>
        <Day>{item.day}</Day>
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
  )
}
