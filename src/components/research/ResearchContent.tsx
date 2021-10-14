import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { colors } from 'src/theme/colors'
import { ClockIcon } from 'src/components/icons/Clock'
import ResearchImage from 'public/images/research.png'
import { CheckMark } from 'src/components/icons/CheckMark'

const Content = styled.div`
  padding: 10px 20px 30px;
  background-color: ${colors.gray[3]};
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 240px;
  width: 100%;
  @media (max-width: 415px) {
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
  color: ${colors.white};
  font-weight: 500;
  font-size: 8px;
  margin-top: 5px;
  @media (max-width: 415px) {
    font-size: 10px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 415px) {
    margin: 4px 0 4px 8px;
  }
`

const Column = styled(Row)`
  flex-direction: column;
`

const ResearchInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${colors.purple[2]};
  @media (max-width: 415px) {
    font-size: 16px;
  }
`

const Description = styled.p`
  color: ${colors.gray[1]};
  font-size: 11px;
  @media (max-width: 415px) {
    font-size: 10px;
  }
`

const DateNumber = styled.p`
  color: ${colors.gray[4]};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 415px) {
    font-size: 16px;
  }
`

const DateMonth = styled(DateNumber)`
  font-size: 10px;
  font-weight: 600;
  @media (max-width: 415px) {
    font-size: 9px;
  }
`

const StatusRow = styled.div`
  display: flex;
  align-items: center;
`

const Status = styled.p`
  font-style: italic;
  color: ${colors.red[3]};
  @media (max-width: 415px) {
    font-size: 12px;
  }
`

const Join = styled.p`
  font-weight: 600;
  color: ${colors.purple[1]};
  cursor: pointer;
  @media (max-width: 415px) {
    font-size: 12px;
  }
`

const ImageWrapper = styled.div`
  display: none;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 415px) {
    display: block;
    position: relative;
    height: 72px;
    width: 72px;
  }
`

const Layer = styled.div`
  display: none;
  background-color: ${colors.purple[3]};
  @media (max-width: 415px) {
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
