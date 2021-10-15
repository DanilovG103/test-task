import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { colors } from 'src/theme/colors'
import { CheckMark } from 'src/components/icons/CheckMark'
import researchImage from 'public/images/research.png'
import { ResearchContent } from './ResearchContent'

const Wrapper = styled.div`
  background-color: ${colors.white};
  grid-area: research;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
  }
`

const IconWrapper = styled.div`
  background-color: ${colors.purple[1]};
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 65%;
  top: 0;
  padding: 10px 8px;
  width: 57px;
  height: 49px;
`

const Checked = styled.p`
  color: ${colors.white};
  font-weight: 500;
  font-size: 8px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Research = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={researchImage} width={290} height={270} />
        <IconWrapper>
          <CheckMark />
          <Checked>Checked In</Checked>
        </IconWrapper>
      </ImageWrapper>
      <ResearchContent />
    </Wrapper>
  )
}
