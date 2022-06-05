import { useState, useCallback } from 'react'

export const useToggle = (state = false) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(state)

  const onToggleModal = useCallback<VoidFunction>(() => {
    setModalOpen(prevState => !prevState)
  }, [])

  return [isModalOpen, onToggleModal]
}
