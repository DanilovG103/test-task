import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
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
