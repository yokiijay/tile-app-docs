import { motion } from 'framer-motion'
import { FC } from 'react'
import { Box } from 'reoil'
import { childrenVariants } from '.'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import { theme } from '../config/theme'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Head from 'next/head'

const PlaygroundPage: FC = () => {
  const centerObjectTitleCSS = css`
    h1 {
      font-size: 2rem;
      margin: 0;
      background: ${theme.primary};
      color: ${theme.white};
    }
    p {
      font-weight: normal;
      font-size: 1rem;
      margin: 0;
      color: ${theme.dark[4]};
    }
  `

  return(
    <>
      <Head>
        <title>Tile App - Playground</title>
      </Head>

      <Layout>
        <motion.div layoutId='title-text' transition={{type: 'spring', stiffness: 300, damping: 30}} style={{
          position: 'absolute',
          top: 30,
          left: 20
        }}>
          <Box className='center-object-title' css={centerObjectTitleCSS} borderBox>
            <h1>Tile App.</h1>
            <p>A design tool for fashion designer.</p>
          </Box>
        </motion.div>

        <motion.div initial='initial' animate='animate' variants={childrenVariants} style={{
            width: '100%',
            height: '100%',
            maxWidth: 1280,
            maxHeight: 700,
            border: '12px solid white',
            background: theme.dark[8],
            borderRadius: 4,
            boxShadow: `0 20px 50px ${theme.dark[8]}`
          }}>
          <iframe title='tile-app' src="https://tile-app.vercel.app/" frameBorder="0" style={{
            width: '100%',
            height: '100%',
          }}></iframe>
        </motion.div>

        <Navigation currentPath='playground' />
      </Layout>
    </>
  )
}

export default PlaygroundPage
