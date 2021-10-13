import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from 'src/theme/colors'
import { CheckMark } from 'assets/icons/CheckMark'
import ResearchImage from 'assets/images/research.png'
import { ResearchContent } from './ResearchContent'

const Wrapper = styled.div`
  background-color: ${Colors.white};
  grid-area: research;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  @media (max-width: 400px) {
    padding: 0;
  }
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

const ImageWrapper = styled.div`
  position: relative;
  @media (max-width: 400px) {
    display: none;
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
      <ResearchContent />
    </Wrapper>
  )
}
