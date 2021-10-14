import React from 'react'
import { colors } from 'src/theme/colors'

export const MessagesIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={50} height={50} fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <circle cx={23} cy={22} r={15} fill={colors.purple[1]} />
        <path
          d="M28.302 16.698a7.5 7.5 0 00-12.21 8.25c.072.149.096.316.068.48L15.5 28.6a.748.748 0 00.75.9h.15l3.21-.645a.946.946 0 01.48.067 7.5 7.5 0 008.25-12.21l-.038-.014zM20 22.75a.75.75 0 110-1.5.75.75 0 010 1.5zm3 0a.75.75 0 110-1.5.75.75 0 010 1.5zm3 0a.75.75 0 110-1.5.75.75 0 010 1.5z"
          fill={colors.white}
        />
        <circle cx={29.5} cy={16.5} r={3.5} fill={colors.green[0]} />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={-4}
          y={-4}
          width={58}
          height={58}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={3} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}
