import React from 'react'
import { colors } from 'src/theme/colors'

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M8 1v14M1 8h14"
        stroke={colors.gray[7]}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
