import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/theme/colors'
import { StoriesProps } from 'src/types'

interface Props {
  item: StoriesProps
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`

const Name = styled.p`
  font-size: 12px;
  color: ${colors.gray[7]};
`

const AvatarWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
  border: double 2px transparent;
  border-radius: 80px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top, ${colors.red[3]}, ${colors.purple[1]});
  background-origin: border-box;
  background-clip: content-box, border-box;
`

const Avatar = styled.img`
  width: 43px;
  height: 43px;
`

export const StoriesBlock = ({ item }: Props) => {
  return (
    <Block>
      <AvatarWrapper>
        <Avatar src={item.avatar} alt={item.name} />
      </AvatarWrapper>
      <Name>{item.name}</Name>
    </Block>
  )
}
