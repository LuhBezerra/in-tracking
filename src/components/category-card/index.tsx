import { useCallback, useMemo } from 'react'

import { MoreIcon } from 'assets/icons'
import { useToggle } from 'hooks/use-toggle'
import { CategoryModal } from 'components/modal-kit'
import { MoreActions } from 'components/ui-kit'
import { useDispatch } from 'hooks/redux'

import type { OptionMoreActions } from 'components/ui-kit'
import type { Category } from 'types/category'

import './styles.scss'
import { deleteCategory } from 'modules/category/actions'

type CategoryCardProps = {
  category: Category
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isEditModalOpen, onToggleEditModal] = useToggle()

  const dispatch = useDispatch()

  const onDelete = useCallback(() => dispatch(deleteCategory(category.id)),[category.id, dispatch])

  const options = useMemo<OptionMoreActions[]>(
    () => [
      {
        onSelect: onDelete,
        label: 'Deletar',
      },
      {
        onSelect: onToggleEditModal as VoidFunction,
        label: 'Editar',
      },
    ],
    [onDelete, onToggleEditModal]
  )

  return (
    <div className="category-wrapper">
      <span className="dot" style={{ background: category.color }} />
      <p className="category-title">{category?.name}</p>
      <MoreActions title="More actions" className="more-icon" icon={MoreIcon} options={options} />

      {isEditModalOpen && (
        <CategoryModal
          data={category}
          onClose={onToggleEditModal as VoidFunction}
          onConfirm={onToggleEditModal as VoidFunction}
        />
      )}
    </div>
  )
}
