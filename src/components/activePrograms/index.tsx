import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { colors } from 'src/theme/colors'

import University from 'assets/images/university.png'
import Academy from 'assets/images/academy.png'

const Programs = styled.div`
  margin-top: 20px;
  padding: 15px 25px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  grid-area: programs;
`

const Title = styled.p`
  color: ${colors.purple[0]};
  font-size: 16px;
  font-weight: 500;
`

const View = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`

const Label = styled.label`
  background-color: ${colors.purple[1]};
  border-radius: 35px;
  justify-content: center;
  display: flex;
  padding: 5px;
  margin-bottom: 5px;
  max-width: 180px;
  @media (max-width: 415px) {
    max-width: 150px;
  }
`

const LabelText = styled.p`
  color: ${colors.white};
  font-size: 10px;
  font-weight: 600;
  @media (max-width: 415px) {
    font-size: 8px;
  }
`

const Info = styled.div`
  margin: 15px 25px;
  display: flex;
  flex-direction: column;
  color: ${colors.purple[0]};
  @media (max-width: 415px) {
    font-size: 12px;
  }
`

const MarkBlock = styled(Info)`
  @media (max-width: 415px) {
    display: none;
  }
`

const Line = styled.div`
  background-color: ${colors.gray[2]};
  height: 1px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const AverageMark = styled.p`
  font-size: 36px;
  font-family: MuseoModerno;
  font-weight: 700;
  text-align: center;
  color: ${colors.gray[1]};
`

const Average = styled.p`
  font-size: 10px;
  color: ${colors.gray[1]};
  text-align: center;
`

export const ActivePrograms = () => {
  return (
    <Programs>
      <Title>Active Programs</Title>
      <View>
        <Image src={University} width={68} height={68} />
        <Row>
          <Info>
            <Label>
              <LabelText>MASTER OF COMPUTER SCIENCE</LabelText>
            </Label>
            University of Upstate
            <br />
            at Brookstone
          </Info>
          <MarkBlock>
            <AverageMark>A-</AverageMark>
            <Average>
              Academic <br /> average
            </Average>
          </MarkBlock>
        </Row>
      </View>
      <Line />
      <View>
        <Image src={Academy} width={68} height={68} />
        <Row>
          <Info>
            <Label>
              <LabelText>CERTIFICATE UX/UI DESIGN</LabelText>
            </Label>
            Academy of Art and Technology
            <br />
            at Dursburg
          </Info>
          <MarkBlock>
            <AverageMark>--</AverageMark>
            <Average>
              Academic <br /> average
            </Average>
          </MarkBlock>
        </Row>
      </View>
    </Programs>
  )
}
