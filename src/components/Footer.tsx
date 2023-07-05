import { PostContext } from '@/contexts/PostContext'
import { useContext } from 'react'

export const Footer = () => {
  const postCtx = useContext(PostContext)
  return (
    <footer className="max-w-xl mx-auto">
      <p>total de posts {postCtx?.posts.length}</p>
    </footer>
  )
}
