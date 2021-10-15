import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/theme/colors'

const Wrapper = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.white : colors.lightPurple)};
  margin-top: 6px;
  @media (max-width: 768px) {
    color: ${({ isActive }) => (isActive ? colors.purple[1] : colors.gray[1])};
    margin: 0;
  }
`
interface Props {
  isActive: boolean
}

export const CoursesIcon = ({ isActive }: Props) => {
  return (
    <Wrapper isActive={isActive}>
      <svg width={17} height={21} fill="none">
        <path
          d="M13.572.917a2.639 2.639 0 012.637 2.635v13.896a2.635 2.635 0 01-2.637 2.635H3.502a2.639 2.639 0 01-2.637-2.636V3.552c0-1.207.811-2.223 1.918-2.537v1.579c-.291.218-.48.565-.48.958v13.894c0 .661.538 1.198 1.2 1.198h10.069c.662 0 1.199-.537 1.199-1.198V3.552c0-.661-.537-1.198-1.2-1.198h-2.157V.917h2.158zm-3.117 0v7.8c0 .715-.767.984-1.237.732l-.079-.05-2.038-1.232-1.993 1.2c-.48.344-1.276.133-1.36-.535l-.006-.114V.917h6.713zM9.017 2.354H5.18v5.293l1.508-.91a.886.886 0 01.785-.022l1.544.933V2.354h-.001z"
          fill="currentColor"
        />
      </svg>
    </Wrapper>
  )
}
