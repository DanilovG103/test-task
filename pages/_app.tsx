import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { Colors } from '../src/theme/colors'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
  body {
    background: ${Colors.lightGray};
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Global />
    <Component {...pageProps} />
    </>
  )
}
export default MyApp
