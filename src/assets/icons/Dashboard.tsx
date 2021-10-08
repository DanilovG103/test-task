import React from "react"
import { Colors } from "../../theme/colors"

interface Props {
  isActive: boolean
}

export const DashboardIcon = ({ isActive }: Props) => {
  return (
    <svg
      width={16}
      height={15}
      fill="none"
    >
      <mask id="prefix__a" fill={isActive ? Colors.white : Colors.lightPurple}>
        <rect x={8.443} width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        x={8.443}
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? Colors.white : Colors.lightPurple}
        strokeWidth={3}
        mask="url(#prefix__a)"
      />
      <mask id="prefix__b" fill={isActive ? Colors.white : Colors.lightPurple}>
        <rect x={8.443} y={7.5} width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        x={8.443}
        y={7.5}
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? Colors.white : Colors.lightPurple}
        strokeWidth={3}
        mask="url(#prefix__b)"
      />
      <mask id="prefix__c" fill={isActive ? Colors.white : Colors.lightPurple}>
        <rect y={7.5} width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        y={7.5}
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? Colors.white : Colors.lightPurple}
        strokeWidth={3}
        mask="url(#prefix__c)"
      />
      <mask id="prefix__d" fill={isActive ? Colors.white : Colors.lightPurple}>
        <rect width={6.567} height={6.563} rx={1} />
      </mask>
      <rect
        width={6.567}
        height={6.563}
        rx={1}
        stroke={isActive ? Colors.white : Colors.lightPurple}
        strokeWidth={3}
        mask="url(#prefix__d)"
      />
    </svg>
  )
}

