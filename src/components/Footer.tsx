import { PostContext } from '@/contexts/PostContext'
import { useContext } from 'react'

export const Footer = () => {
  const postCtx = useContext(PostContext)
  return (
    <footer>
      <p>total de posts {postCtx?.posts.length}</p>
    </footer>
  )
}
