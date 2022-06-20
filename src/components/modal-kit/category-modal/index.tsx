import { useCallback, useState, useEffect } from 'react'

import { Input, Modal } from 'components/ui-kit'
import { useDispatch, useSelector } from 'hooks/redux'
import { createCategory, updateCategory } from 'modules/category/actions'
import { hasCategoryErrorSelector, isCategoryLoadingSelector } from 'modules/category/selectors'
import { usePrevious } from 'hooks/use-previous'

import type { Category } from 'types/category'

import './index.scss'

type CategoryModalProps = {
  data?: Category
  onClose: () => void
  onConfirm: () => void
}

export const CategoryModal = ({ data, onClose, onConfirm }: CategoryModalProps) => {
  const [form, setForm] = useState<Category>({
    id: data?.id || '',
    color: '#000' || data?.color,
    name: data?.name || '',
  })

  const dispatch = useDispatch()

  const isLoading = useSelector(isCategoryLoadingSelector)
  const hasError = useSelector(hasCategoryErrorSelector)

  const wasLoading = usePrevious(isLoading)

  const onChange = useCallback(event => {
    setForm(prevProps => ({ ...prevProps, [event.target.name]: event.target.value }))
  }, [])

  const onSubmit = useCallback(() => {
    if (data) {
      return dispatch(updateCategory({categoryId: data.id, payload: form}))
    }
    
    return dispatch(createCategory(form))
  }, [dispatch, data, form])

  useEffect(() => {
    if (wasLoading && !isLoading && !hasError) {
      onConfirm()
    }
  }, [hasError, isLoading, onConfirm, wasLoading])


  return (
    <Modal
      className="category-modal"
      title={data ? 'Editar categoria' : 'Adicionar categoria'}
      isOpen
      onClose={onClose}
      onConfirm={onSubmit}
    >
      <form className="content">
        <Input
          id="category-color"
          inputClassName="color"
          name="color"
          type="color"
          value={form.color}
          onChange={onChange}
        />
        <Input
          id="category-name"
          className="category"
          name="name"
          value={form.name}
          onChange={onChange}
        />
      </form>
    </Modal>
  )
}

export default CategoryModal
