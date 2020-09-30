import { FC, useState } from 'react'
import Layout from '../components/Layout'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Avatar, Box } from 'reoil'

const HomePage: FC = () => {
  const [list, setList] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false
  ])

  const handleClick = index => {
    setList(list => list.map((item, i) => (i === index ? !item : item)))
  }

  return (
    <Layout>
      <AnimateSharedLayout>
        <motion.div
          layout
          css={css`
            padding: 12px;
            background: whitesmoke;
            border-radius: 12px;
          `}>
          {list.map((item, i) => (
            <motion.div key={i} layout>
              <Box
                background='white'
                borderRadius={8}
                p={12}
                my={3}
                width={300}
                pointer
                onClick={() => handleClick(i)}
                stretch>
                <motion.div layout>
                  <Avatar />
                </motion.div>
                <Box mb={3} />
                <AnimatePresence>
                  {item && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis quas accusamus voluptate, alias sunt nemo, excepturi
                      blanditiis eius delectus tenetur optio reprehenderit,
                      pariatur eligendi harum officiis quod dolor esse. Nulla.
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </Layout>
  )
}

export default HomePage
