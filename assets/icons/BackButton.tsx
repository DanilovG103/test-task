import * as React from 'react'
import { colors } from 'src/theme/colors'

export const BackButton = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={9} height={18} fill="none" {...props}>
      <path
        d="M.333 9c0-.273.095-.537.269-.747l5.833-7a1.168 1.168 0 011.797 1.494L3.005 9l5.04 6.253a1.166 1.166 0 01-.175 1.645 1.167 1.167 0 01-1.703-.163l-5.635-7A1.167 1.167 0 01.333 9z"
        fill={colors.purple[1]}
      />
    </svg>
  )
}
