import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getStories } from '../store/reducer'
import { Colors } from '../theme/colors'
import { PlusIcon } from '../../assets/icons/Plus'
import { StoriesProps } from '../../pages/api/types'

const Wrapper = styled.div`
  display: flex;
  width: 290px;
  overflow-x: auto;
  padding: 15px;
  align-items: center;
`

const AddCircle = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${Colors.gray[8]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
`

const Name = styled.p`
  font-size: 12px;
  color: ${Colors.gray[7]};
`

const Avatar = styled.img`
  width: 46px;
  height: 46px;
`

export const Stories = () => {
  const { stories } = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStories())
  },[dispatch])

  return (
    <Wrapper>
      <Block>
        <AddCircle>
          <PlusIcon />
        </AddCircle>
        <Name>Add</Name>
      </Block>
      {(stories as StoriesProps[]).map(item => (
        <Block key={item.id}>
          <Avatar src={item.avatar} alt={item.name}/>
          <Name>{item.name}</Name>
        </Block>
      ))}
    </Wrapper>
  )
}