import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { store } from 'src/store'
import { Colors } from 'src/theme/colors'

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
    <Provider store={store}>
      <Global />
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
