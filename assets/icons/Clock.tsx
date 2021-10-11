import React from "react"
import { Colors } from "../../src/theme/colors"

export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        d="M12 20.2a8.2 8.2 0 100-16.4 8.2 8.2 0 000 16.4z"
        stroke={Colors.red[3]}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.86v4l2.14 1.02"
        stroke={Colors.red[3]}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.2a8.2 8.2 0 100-16.4 8.2 8.2 0 000 16.4z"
        stroke={Colors.red[3]}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
