import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getStories } from 'src/store/reducers/stories'
import { colors } from 'src/theme/colors'
import { selectStories } from 'src/store/selectors/stories'
import { PlusIcon } from 'src/components/icons/Plus'
import { Loading } from '../Loading'

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 15px;
  align-items: center;
  position: relative;
`

const AddCircle = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${colors.gray[8]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`

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

interface Props {
  messagesLoading: boolean
}

export const Stories = ({ messagesLoading }: Props) => {
  const { loading, stories } = useSelector(selectStories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  return (
    <Wrapper>
      <Block>
        <AddCircle>
          <PlusIcon />
        </AddCircle>
        <Name>Add</Name>
      </Block>
      {loading && messagesLoading && <Loading />}
      {stories.map((item) => (
        <Block key={item.id}>
          <AvatarWrapper>
            <Avatar src={item.avatar} alt={item.name} />
          </AvatarWrapper>
          <Name>{item.name}</Name>
        </Block>
      ))}
    </Wrapper>
  )
}
