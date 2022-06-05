import { useMemo } from 'react'

import { MoreIcon } from 'assets/icons'
import { useToggle } from 'hooks/use-toggle'
import { CategoryModal } from 'components/modal-kit'
import { MoreActions } from 'components/ui-kit'
import type { OptionMoreActions } from 'components/ui-kit'

import './styles.scss'

export const CategoryCard = () => {
  const [isEditModalOpen, onToggleEditModal] = useToggle()

  const options = useMemo<OptionMoreActions[]>(
    () => [
      {
        onSelect: () => {},
        label: 'Deletar',
      },
      {
        onSelect: onToggleEditModal as VoidFunction,
        label: 'Editar',
      },
    ],
    [onToggleEditModal]
  )

  return (
    <div className="category-wrapper">
      <span className="dot" />
      <p className="category-title">lorem ipsum</p>
      <MoreActions title="More actions" className="more-icon" icon={MoreIcon} options={options} />

      {isEditModalOpen && (
        <CategoryModal
          data={{ color: '000', name: 'opa' }}
          onClose={onToggleEditModal as VoidFunction}
          onConfirm={onToggleEditModal as VoidFunction}
        />
      )}
    </div>
  )
}
