import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getStories } from 'src/store/reducers/stories'
import { colors } from 'src/theme/colors'
import { selectStories } from 'src/store/selectors/stories'
import { PlusIcon } from 'src/components/icons/Plus'
import { Loading } from '../Loading'
import { StoriesBlock } from './StoriesBlock'

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

const LoaderWrapper = styled.div`
  position: absolute;
  left: 45%;
`

const NoStories = styled.p`
  font-size: 16px;
  color: ${colors.darkBlue};
  text-align: center;
`

interface Props {
  messagesLoading: boolean
}

export const Stories = ({ messagesLoading }: Props) => {
  const { loading, stories } = useSelector(selectStories)
  const dispatch = useDispatch()
  const hasStories = stories.items.length !== 0

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
      {loading && messagesLoading && (
        <LoaderWrapper>
          <Loading />
        </LoaderWrapper>
      )}
      {hasStories ? (
        stories.items.map((item) => <StoriesBlock item={item} key={item.id} />)
      ) : (
        <NoStories>No stories</NoStories>
      )}
    </Wrapper>
  )
}
