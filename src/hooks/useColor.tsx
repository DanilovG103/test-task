import { useEffect, useState } from 'react'
import { colors } from 'src/theme/colors'

export const useColor = (width: number) => {
  const [color, setColor] = useState<Record<string, string>>({
    active: '',
    inactive: '',
  })

  useEffect(() => {
    width > 415
      ? setColor({ active: colors.white, inactive: colors.lightPurple })
      : setColor({ active: colors.purple[1], inactive: colors.gray[1] })
  }, [width])

  return color
}
