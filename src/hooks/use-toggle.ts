import { useState, useCallback } from 'react'

export const useToggle = (state = false) => {
  const [isModalOpen, setModalOpen] = useState(state)

  const onToggleModal = useCallback(() => {
    setModalOpen(prevState => !prevState)
  }, [])

  return [isModalOpen, onToggleModal]
}
