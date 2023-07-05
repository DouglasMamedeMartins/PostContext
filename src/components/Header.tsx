import { PostContext } from '@/contexts/PostContext'
import { useContext, useState } from 'react'

export const Header = () => {
  const postCtx = useContext(PostContext)

  const [titleInput, setTitleInput] = useState('')
  const [bodyInput, setBodyInput] = useState('')

  const handleAddButton = () => {
    if (titleInput && bodyInput) {
      postCtx?.addPost(titleInput, bodyInput)
      setTitleInput('')
      setBodyInput('')
    }
  }

  return (
    <header className="max-w-xl mx-auto">
      <h1>Título da página</h1>
      <div className=" border border-dotted border-gray-400 p-3 flex flex-col gap-2">
        <input
          className="border border-gray-300 p-2 text-black text-xl"
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Digite um titulo"
        />
        <textarea
          className="h-24 border border-gray-300 p-2 text-black text-xl"
          placeholder="Digite um corpo"
          value={bodyInput}
          onChange={(e) => setBodyInput(e.target.value)}
        />
        <button
          onClick={handleAddButton}
          className="bg-blue-600 p-3 text-white rounded-md"
        >
          Adicionar
        </button>
      </div>
    </header>
  )
}
