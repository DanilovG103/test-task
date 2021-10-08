import React from "react"
import { Colors } from "../../theme/colors"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={28}
      height={37}
      fill="none"
      {...props}
    >
      <path
        d="M23.144 7.245a4.075 4.075 0 00-4.069 4.067v10.13a5.462 5.462 0 01-3.355 5.127 5.471 5.471 0 01-7.581-5.127v-10.13a4.065 4.065 0 00-4.07-4.066A4.07 4.07 0 000 11.312v11.203a13.59 13.59 0 003.985 9.615 13.61 13.61 0 0014.829 2.947 13.608 13.608 0 007.364-7.359 13.589 13.589 0 001.036-5.203V11.312a4.07 4.07 0 00-4.07-4.067zm2.29 15.269c0 3.134-1.247 6.14-3.465 8.357a11.831 11.831 0 01-16.725 0 11.814 11.814 0 01-3.464-8.357V11.312a2.287 2.287 0 012.29-2.267 2.29 2.29 0 012.288 2.267v10.13a7.24 7.24 0 002.123 5.122 7.25 7.25 0 0012.374-5.122v-10.13a2.286 2.286 0 012.29-2.287 2.29 2.29 0 012.288 2.287v11.202z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M12.717 9.319v11.727a.89.89 0 001.78 0V9.32a4.706 4.706 0 003.794-5.064A4.7 4.7 0 0013.607 0a4.707 4.707 0 00-4.684 4.255 4.7 4.7 0 003.794 5.064zm.89-7.538a2.926 2.926 0 012.869 3.493 2.922 2.922 0 01-3.988 2.13 2.925 2.925 0 01-1.806-2.7 2.925 2.925 0 012.925-2.923z"
        fill="url(#prefix__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={0}
          y1={21.679}
          x2={27.214}
          y2={21.679}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={Colors.red[0]} />
          <stop offset={1} stopColor={Colors.red[1]} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={8.902}
          y1={10.968}
          x2={18.312}
          y2={10.968}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={Colors.red[0]} />
          <stop offset={1} stopColor={Colors.red[1]} />
        </linearGradient>
      </defs>
    </svg>
  )
}

