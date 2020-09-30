import { normalize } from 'polished'
/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core'
import { AnimateSharedLayout } from 'framer-motion'

const globalCSS = css`
  ${normalize()};

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html, body, #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalCSS} />

      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  )
}

export default MyApp
