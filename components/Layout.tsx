import { FC } from 'react'
import { Box } from 'reoil'
import { BoxProps } from 'reoil/dist/Box'

const Layout: FC<BoxProps> = ({children, ...props}) => {
  return(
    <Box center height='100%' {...props}>
      {children}
    </Box>
  )
}

export default Layout
