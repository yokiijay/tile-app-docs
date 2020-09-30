import { FC } from 'react'
import { Box } from 'reoil'
import { useRouter } from 'next/router'

type Paths = 'home' | 'playground' | 'download'

interface NavigationProps {
  currentPath?: Paths
}

const Navigation: FC<NavigationProps> = ({ currentPath }) => {
  const paths: Array<Paths> = ['home', 'playground', 'download']
  const router = useRouter()

  const handleClick = (path:Paths)=>{
    path==='home' ? router.push('/') : router.push('/'+path)
  }

  return (
    <Box className='navigation' position='absolute' bottom={0} row>
      {paths.map(path => (
        <Box
          key={path}
          className='navigation__item'
          py={2}
          my={3}
          mx={3}
          textTransform='capitalize'
          opacity={currentPath === path ? 1 : .6}
          borderBottom={currentPath === path ? '2px dotted currentColor' : ''}
          fontWeight={currentPath === path ? 'bold' : 'normal'}
          onClick={()=>handleClick(path)}
          pointer>
          {path}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
