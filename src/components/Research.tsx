import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from 'src/theme/colors'
import { CheckMark } from 'assets/icons/CheckMark'
import { ClockIcon } from 'assets/icons/Clock'
import ResearchImage from 'assets/images/research.png'

const Wrapper = styled.div`
  background-color: ${Colors.white};
  grid-area: research;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 400px;
`

const IconWrapper = styled.div`
  background-color: ${Colors.purple[1]};
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 32%;
  padding: 10px 8px;
  width: 60px;
`

const Checked = styled.p`
  color: ${Colors.white};
  font-weight: 500;
  font-size: 8px;
`

const ResearchBlock = styled.div`
  padding: 10px 25px 30px;
  background-color: ${Colors.gray[3]};
  border-radius: 10px;
  width: 110%;
  align-self: center;
  margin: -20px 0 -110px;
  z-index: 1;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const Column = styled(Row)`
  flex-direction: column;
`

const ResearchInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${Colors.purple[2]};
`

const Description = styled.p`
  color: ${Colors.gray[1]};
  font-size: 11px;
`

const DateNumber = styled.p`
  color: ${Colors.gray[4]};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`

const DateMonth = styled(DateNumber)`
  font-size: 10px;
  font-weight: 600;
`

const StatusRow = styled.div`
  display: flex;
  align-items: center;
`

const Status = styled.p`
  font-style: italic;
  color: ${Colors.red[3]};
`

const Join = styled.p`
  font-weight: 600;
  color: ${Colors.purple[1]};
`

export const Research = () => {
  return (
    <Wrapper>
      <Image src={ResearchImage} />
      <IconWrapper>
        <CheckMark />
        <Checked>Checked In</Checked>
      </IconWrapper>
      <ResearchBlock>
        <Row>
          <Column>
            <ResearchInfo>UX Research - Week 3</ResearchInfo>
            <Description>CERTIFICATE UX/UI DESIGN</Description>
          </Column>
          <Column>
            <DateNumber>08</DateNumber>
            <DateMonth>APRIL</DateMonth>
          </Column>
        </Row>
        <Row>
          <StatusRow>
            <ClockIcon />
            <Status>In Progress</Status>
          </StatusRow>
          <Join>Join Now</Join>
        </Row>
      </ResearchBlock>
    </Wrapper>
  )
}
