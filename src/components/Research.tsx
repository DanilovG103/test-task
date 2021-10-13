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
  height: 75%;
  position: relative;
`

const IconWrapper = styled.div`
  background-color: ${Colors.purple[1]};
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 60%;
  top: 0;
  padding: 10px 8px;
  width: 60px;
`

const Checked = styled.p`
  color: ${Colors.white};
  font-weight: 500;
  font-size: 8px;
  @media (max-width: 400px) {
    font-size: 10px;
  }
`

const ResearchBlock = styled.div`
  padding: 10px 25px 30px;
  background-color: ${Colors.gray[3]};
  border-radius: 10px;
  align-self: center;
  position: absolute;
  top: 240px;
  width: 100%;
  @media (max-width: 400px) {
    display: flex;
    margin: 0;
    padding: 10px;
  }
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

const ImageWrapper = styled.div`
  position: relative;
  @media (max-width: 400px) {
    display: none;
  }
`

const ImageMobileWrapper = styled.div`
  display: none;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 400px) {
    display: block;
    position: relative;
  }
`

const Layer = styled.div`
  display: none;
  background-color: ${Colors.purple[3]};
  @media (max-width: 400px) {
    display: block;
    position: absolute;
    top: 0;
    height: 72px;
    width: 72px;
  }
`

export const Research = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={ResearchImage} width={290} height={270} />
        <IconWrapper>
          <CheckMark />
          <Checked>Checked In</Checked>
        </IconWrapper>
      </ImageWrapper>
      <ResearchBlock>
        <ImageMobileWrapper>
          <Image src={ResearchImage} height={72} width={72} />
          <Layer>
            <CheckMark />
            <Checked>Checked In</Checked>
          </Layer>
        </ImageMobileWrapper>
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
      </ResearchBlock>
    </Wrapper>
  )
}
