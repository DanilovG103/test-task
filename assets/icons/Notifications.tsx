import React from 'react'
import { colors } from 'src/theme/colors'

interface Props {
  isActive: boolean
}

export const Notifications = ({ isActive }: Props) => {
  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M19.822 16.199h0l.102.124.128.155a.898.898 0 01.117.961v.002c-.16.334-.502.558-.927.558H4.763c-.43 0-.773-.226-.932-.56v-.002a.898.898 0 01.118-.96h0l.004-.006.197-.239.028-.034h0l.023-.028c.505-.608.99-1.194 1.32-2.103.328-.907.485-2.08.485-3.879 0-1.505.301-2.682.861-3.592C7.423 5.693 8.27 4.994 9.47 4.5l.041-.017.04-.022a.897.897 0 00.231-.186l.111-.124.048-.16C10.27 2.89 11.13 2.25 12 2.25c.87 0 1.731.639 2.06 1.742l.046.153.104.12c.068.08.15.148.243.2l.039.02.04.018c1.031.424 1.775.98 2.317 1.69h0c.736.96 1.145 2.285 1.145 3.997 0 1.798.157 2.97.486 3.877.33.908.814 1.494 1.317 2.102l.024.03z"
        stroke={isActive ? colors.purple[1] : colors.gray[1]}
        strokeWidth={1.5}
      />
      <path
        d="M12 22.5a3.752 3.752 0 003.302-1.975.188.188 0 00-.166-.275H8.865a.188.188 0 00-.166.275A3.753 3.753 0 0012 22.5z"
        fill={isActive ? colors.purple[1] : colors.gray[1]}
      />
    </svg>
  )
}
