import { motion } from 'framer-motion'
import Head from 'next/head'
import { FC } from 'react'
import { Box } from 'reoil'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { theme } from '../config/theme'
import { FaApple, FaWindows } from 'react-icons/fa'

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
          <p>Download the Tile App. MacOS, Win supported.</p>
        </Box>
      </motion.div>

      <Box className='download' row center css={css`
        h1 {
          max-width: 320px;
          margin: 0;
        }
        .download {

          &__item {
            background: ${theme.black};
            color: white;
            padding: 12px 20px;
            width: 100%;
          }
        }
      `}>
        <Box center left>
          <h1 className='download__words'>Download</h1>
          <p>Choose your platform.</p>
        </Box>

        <Box className='download__divider' height='100%' width='1px' mx={4} bg={theme.dark[6]}></Box>

        <Box>
          <Box className="download__item" row mb={3} pointer>
            <FaApple /> <Box ml={3}><a href="https://github.com/yokiijay/tile-app/releases/download/v1.0.0/Tile.App-1.0.0.dmg" download="Tile App">For Mac</a></Box>
          </Box>
          <Box className="download__item" row pointer>
            <FaWindows /> <Box ml={3}><a href="https://github.com/yokiijay/tile-app/releases/download/v1.0.0/Tile.App.Setup.1.0.0.exe" download="Tile App">For Windows</a></Box>
          </Box>
        </Box>
      </Box>

      <Navigation currentPath='download' />
    </Layout>
  )
}

export default DownloadPage
