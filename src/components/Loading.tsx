import React from 'react'
import Loader from 'react-loader-spinner'
import { colors } from 'src/theme/colors'

export const Loading = () => {
  return (
    <Loader type="TailSpin" width={40} height={40} color={colors.purple[1]} />
  )
}
