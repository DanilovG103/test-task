import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/theme/colors'

const Wrapper = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? colors.white : colors.lightPurple)};
  @media (max-width: 768px) {
    color: ${({ isActive }) => (isActive ? colors.purple[1] : colors.gray[1])};
  }
`

interface Props {
  isActive: boolean
}

export const DashboardIcon = ({ isActive }: Props) => {
  return (
    <Wrapper isActive={isActive}>
      <svg width={16} height={15} fill="none">
        <mask id="prefix__a" fill="currentColor">
          <rect x={8.443} width={6.567} height={6.563} rx={1} />
        </mask>
        <rect
          x={8.443}
          width={6.567}
          height={6.563}
          rx={1}
          stroke="currentColor"
          strokeWidth={3}
          mask="url(#prefix__a)"
        />
        <mask id="prefix__b" fill="currentColor">
          <rect x={8.443} y={7.5} width={6.567} height={6.563} rx={1} />
        </mask>
        <rect
          x={8.443}
          y={7.5}
          width={6.567}
          height={6.563}
          rx={1}
          stroke="currentColor"
          strokeWidth={3}
          mask="url(#prefix__b)"
        />
        <mask id="prefix__c" fill="currentColor">
          <rect y={7.5} width={6.567} height={6.563} rx={1} />
        </mask>
        <rect
          y={7.5}
          width={6.567}
          height={6.563}
          rx={1}
          stroke="currentColor"
          strokeWidth={3}
          mask="url(#prefix__c)"
        />
        <mask id="prefix__d" fill="currentColor">
          <rect width={6.567} height={6.563} rx={1} />
        </mask>
        <rect
          width={6.567}
          height={6.563}
          rx={1}
          stroke="currentColor"
          strokeWidth={3}
          mask="url(#prefix__d)"
        />
      </svg>
    </Wrapper>
  )
}
