import { desaturate } from 'polished'
import { FC } from 'react'
import { Box, Image } from 'reoil'
import Layout from '../components/Layout'
import { theme } from '../config/theme'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Navigation from '../components/Navigation'
import { motion, Variants } from 'framer-motion'
import {useRouter} from 'next/router'
import { MdPlayArrow } from 'react-icons/md'
import Head from 'next/head'

export const childrenVariants: Variants = {
  initial: {
    y: 80,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.6,
      type: 'tween',
      ease: 'circOut'
    }
  },
}

export const parentVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: .2
    }
  }
}

const IndexPage: FC = () => {
  const centerObjectTitleCSS = css`
    h1 {
      font-size: 5rem;
      margin: 0;
    }
    p {
      font-weight: 200;
      font-size: 4rem;
      margin: 0;
    }
  `

  const router = useRouter()

  return(
    <>
      <Head>
        <title>Tile App</title>
      </Head>

      <motion.div style={{height: '100%'}} initial='initial' animate='animate' variants={parentVariants}>
        <Layout bg={desaturate(.2, theme.primary)} color='white' overflow='hidden'>
          <Box className='center-object' borderBox right px={3}>
            <motion.div variants={childrenVariants}>
              <Box className='center-object-image' cover style={{
                transform: 'translate(-180px, -40px)'
              }}>
                <Image src='https://i.loli.net/2020/09/28/pvojXDhKE9mNCdR.png' />
              </Box>
            </motion.div>
            <motion.div layoutId='title-text' variants={childrenVariants} style={{
              position: 'relative',
              bottom: 190,
              left: 40
            }}>
              <Box className='center-object-title' css={centerObjectTitleCSS} borderBox>
                <h1>Tile App.</h1>
                <p>A design tool for fashion designer.</p>
              </Box>
            </motion.div>
          
          </Box>

          <motion.div variants={childrenVariants}>
            <Box onClick={()=>router.push('/playground')} className='btn-try' center width={300} top={-90} pointer color={theme.black} fontWeight='bold' fontSize={2} py={16} textTransform='uppercase'  css={css`
                .btn-try__cover {
                  transition: .25s
                }
                &:hover .btn-try__cover {
                  transform: scale(1.2)
                }
              `}>
              <Box className='btn-try__cover' backgroundImage='linear-gradient(270deg, #42ACE7 0%, #42DDE7 100%);' position='absolute' height='100%' width='100%'></Box>
              <Box row center>try it now <MdPlayArrow style={{marginLeft: 8}} /></Box>
            </Box>
          </motion.div>

          <Navigation currentPath='home' />
        </Layout>
      </motion.div>
    </>
  )
}

export default IndexPage
