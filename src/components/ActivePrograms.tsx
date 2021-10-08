import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from '../theme/colors'
import University from '../assets/images/university.png'
import Academy from '../assets/images/academy.png'

const Programs = styled.div`
  margin-top: 20px;
  padding: 15px 25px;
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
`

const Title = styled.p`
  color: ${Colors.purple[0]};
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
  background-color: ${Colors.purple[1]};
  border-radius: 35px;
  justify-content: center;
  display: flex;
  padding: 5px;
  margin-bottom: 5px;
`

const LabelText = styled.p`
  color: ${Colors.white};
  font-size: 10px;
  font-weight: 600;
`

const Info = styled.div`
  margin: 15px 25px;
  display: flex;
  flex-direction: column;
`

const Line = styled.div`
  background-color: ${Colors.gray[2]};
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
  color: ${Colors.gray[1]};
`

const Average = styled.p`
  font-size: 10px;
  color: ${Colors.gray[1]};
  text-align: center;
`

export const ActivePrograms = () => {
  return (
    <Programs>
      <Title>Active Programs</Title>
      <View>
        <Image src={University}/>
        <Row>
          <Info>
            <Label>
              <LabelText>MASTER OF COMPUTER SCIENCE</LabelText>
            </Label>
            University of Upstate<br />at Brookstone
          </Info>
          <Info>
            <AverageMark>
              A-
            </AverageMark>
            <Average>
              Academic <br /> average
            </Average>
          </Info>
        </Row>
      </View>
      <Line />
      <View>
        <Image src={Academy}/>
        <Row>
          <Info>
            <Label>
              <LabelText>CERTIFICATE UX/UI DESIGN</LabelText>
            </Label>
            Academy of Art and Technology<br/>at Dursburg
          </Info>
          <Info>
            <AverageMark>
              --
            </AverageMark>
            <Average>
              Academic <br /> average
            </Average>
          </Info>
        </Row>
      </View>
    </Programs>
  )
}
