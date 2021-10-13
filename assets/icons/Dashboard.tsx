import React from 'react'
import { useColor } from 'src/hooks/useColor'
import { useWindowSize } from 'src/hooks/useWindowSize'

interface Props {
  isActive: boolean
}

export const DashboardIcon = ({ isActive }: Props) => {
  const { width } = useWindowSize()
  const { active, inactive } = useColor(width)

  return (
    <svg width={16} height={15} fill="none">
      <mask id="prefix__a" fill={isActive ? active : inactive}>
        <rect x={8.443} width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        x={8.443}
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? active : inactive}
        strokeWidth={3}
        mask="url(#prefix__a)"
      />
      <mask id="prefix__b" fill={isActive ? active : inactive}>
        <rect x={8.443} y={7.5} width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        x={8.443}
        y={7.5}
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? active : inactive}
        strokeWidth={3}
        mask="url(#prefix__b)"
      />
      <mask id="prefix__c" fill={isActive ? active : inactive}>
        <rect y={7.5} width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        y={7.5}
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? active : inactive}
        strokeWidth={3}
        mask="url(#prefix__c)"
      />
      <mask id="prefix__d" fill={isActive ? active : inactive}>
        <rect width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? active : inactive}
        strokeWidth={3}
        mask="url(#prefix__d)"
      />
    </svg>
  )
}
