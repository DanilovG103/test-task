import { useEffect, useState } from 'react'
import { Colors } from 'src/theme/colors'

export const useColor = (width: number) => {
  const [color, setColor] = useState<Record<string, string>>({
    active: '',
    inactive: '',
  })

  useEffect(() => {
    width > 400
      ? setColor({ active: Colors.white, inactive: Colors.lightPurple })
      : setColor({ active: Colors.purple[1], inactive: Colors.gray[1] })
  }, [width])

  return color
}
