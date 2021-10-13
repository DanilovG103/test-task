import React from 'react'
import { Colors } from 'src/theme/colors'

interface Props {
  isActive: boolean
}

export const Setting = ({ isActive }: Props) => {
  return (
    <svg width={25} height={25} fill="none">
      <path
        d="M19.052 7.373a2.07 2.07 0 00-2.034-.898 2.842 2.842 0 01-3.027-1.728 2.071 2.071 0 00-1.807-1.3 8.846 8.846 0 00-.889 0 2.076 2.076 0 00-1.811 1.316 2.84 2.84 0 01-3.007 1.751c-.807-.107-1.6.24-2.038.928a8.704 8.704 0 00-.475.844c-.347.706-.213 1.519.272 2.138a2.84 2.84 0 01.013 3.485c-.481.626-.61 1.44-.258 2.149a8.527 8.527 0 00.489.848 2.07 2.07 0 002.034.898 2.84 2.84 0 013.027 1.728 2.07 2.07 0 001.807 1.299c.296.015.592.015.888 0a2.075 2.075 0 001.812-1.315 2.84 2.84 0 013.007-1.751c.806.107 1.6-.241 2.037-.928.174-.273.333-.555.475-.845.348-.705.213-1.518-.272-2.138a2.841 2.841 0 01-.012-3.485c.481-.625.61-1.44.258-2.146a8.63 8.63 0 00-.488-.85z"
        stroke={isActive ? Colors.purple[1] : Colors.gray[1]}
        strokeWidth={1.326}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.767 14.484a2.345 2.345 0 100-4.689 2.345 2.345 0 000 4.69z"
        stroke={isActive ? Colors.purple[1] : Colors.gray[1]}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
