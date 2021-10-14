import React from 'react'
import Loader from 'react-loader-spinner'
import { Colors } from 'src/theme/colors'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  position: absolute;
  left: 45%;
  top: 50%;
`

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Loader type="TailSpin" width={40} height={40} color={Colors.purple[1]} />
    </LoadingWrapper>
  )
}
