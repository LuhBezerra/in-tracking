import { Input, Modal } from 'components/ui-kit'
import { useCallback, useState } from 'react'

import './index.scss'

type Category = {
  color: string
  name?: string
}

type CategoryModalProps = {
  data?: Category
  onClose: () => void
  onConfirm: () => void
}

export const CategoryModal = ({ data, onClose, onConfirm }: CategoryModalProps) => {
  const [form, setForm] = useState<Category>({color: '#000' || data?.color, name: data?.name})

  const onChange = useCallback((event) => {
    setForm(prevProps => ({...prevProps, [event.target.name]: event.target.value}))
  }, [])

  return (
    <Modal
      className="category-modal"
      title={data ? 'Editar categoria' : 'Adicionar categoria'}
      isOpen
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <form className="content">
        <Input id='category-color' inputClassName='color' name='color' type="color" value={form.color} onChange={onChange} />
        <Input id='category-name' className='category' name='name' value={form.name} onChange={onChange}/>
      </form>
    </Modal>
  )
}

export default CategoryModal
