import { motion } from 'framer-motion'
import Head from 'next/head'
import { FC } from 'react'
import { Box } from 'reoil'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { theme } from '../config/theme'

const DownloadPage: FC = () => {
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
    <Layout>
      <Head>
        <title>Tile App - Download</title>
      </Head>

      
      <motion.div layoutId='title-text' transition={{type: 'spring', stiffness: 300, damping: 30}} style={{
          position: 'absolute',
          top: 30,
          left: 20
        }}>
          <Box className='center-object-title' css={centerObjectTitleCSS} borderBox>
            <h1>Tile App.</h1>
            <p>Download the Tile App. MacOs, Win supported.</p>
          </Box>
        </motion.div>

      <Navigation currentPath='download' />
    </Layout>
  )
}

export default DownloadPage
