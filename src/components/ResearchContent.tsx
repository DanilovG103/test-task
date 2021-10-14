import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Colors } from 'src/theme/colors'
import { ClockIcon } from 'assets/icons/Clock'
import ResearchImage from 'assets/images/research.png'
import { CheckMark } from 'assets/icons/CheckMark'

const Content = styled.div`
  padding: 10px 20px 30px;
  background-color: ${Colors.gray[3]};
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 240px;
  width: 100%;
  @media (max-width: 400px) {
    display: flex;
    background: transparent;
    align-items: center;
    margin: 0;
    padding: 15px;
    position: relative;
    top: 0;
  }
`

const Checked = styled.p`
  color: ${Colors.white};
  font-weight: 500;
  font-size: 8px;
  margin-top: 5px;
  @media (max-width: 400px) {
    font-size: 10px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 400px) {
    margin: 4px 0 4px 8px;
  }
`

const Column = styled(Row)`
  flex-direction: column;
`

const ResearchInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${Colors.purple[2]};
  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const Description = styled.p`
  color: ${Colors.gray[1]};
  font-size: 11px;
  @media (max-width: 400px) {
    font-size: 10px;
  }
`

const DateNumber = styled.p`
  color: ${Colors.gray[4]};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`

const DateMonth = styled(DateNumber)`
  font-size: 10px;
  font-weight: 600;
  @media (max-width: 400px) {
    font-size: 9px;
  }
`

const StatusRow = styled.div`
  display: flex;
  align-items: center;
`

const Status = styled.p`
  font-style: italic;
  color: ${Colors.red[3]};
  @media (max-width: 400px) {
    font-size: 12px;
  }
`

const Join = styled.p`
  font-weight: 600;
  color: ${Colors.purple[1]};
  @media (max-width: 400px) {
    font-size: 12px;
  }
`

const ImageWrapper = styled.div`
  display: none;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 400px) {
    display: block;
    position: relative;
    height: 72px;
    width: 72px;
  }
`

const Layer = styled.div`
  display: none;
  background-color: ${Colors.purple[3]};
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

export const ResearchContent = () => {
  return (
    <Content>
      <ImageWrapper>
        <Image src={ResearchImage} height={72} width={72} />
        <Layer>
          <CheckMark />
          <Checked>Checked In</Checked>
        </Layer>
      </ImageWrapper>
      <Column>
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
        <Row style={{ alignItems: 'center' }}>
          <StatusRow>
            <ClockIcon />
            <Status>In Progress</Status>
          </StatusRow>
          <Join>Join Now</Join>
        </Row>
      </Column>
    </Content>
  )
}
