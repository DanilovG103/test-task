import React from "react"
import { Colors } from "src/theme/colors"

export const CheckMark = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={19}
      height={16}
      fill="none"
      {...props}
    >
      <path
        d="M16.047.482a1.748 1.748 0 012.494 2.447l-9.3 11.63a1.748 1.748 0 01-2.517.047L.556 8.44a1.748 1.748 0 112.471-2.47l4.88 4.878L16.003.533a.623.623 0 01.047-.051h-.002z"
        fill={Colors.green[1]}
      />
    </svg>
  )
}

