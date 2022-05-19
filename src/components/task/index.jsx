import { useMemo } from 'react'

import { MoreActions } from 'components/ui-kit'
import { MoreIcon } from 'assets/icons'

import './styles.scss'

export const TaskCard = () => {
  const options = useMemo(
    () => [
      {
        onSelect: () => {},
        label: 'Deletar',
        // icon: DeleteIcon,
      },
      {
        onSelect: () => {},
        label: 'Editar',
        // icon: DeleteIcon,
      },
    ],
    []
  )

  return (
    <div className="task-wrapper">
      <span className="dot" />
      <p className="task-title">lorem ipsum</p>
      <p className="description">7 dias restantes - Mar 19 2022</p>
      <span className="status">em progresso</span>
      <MoreActions title="More actions" className="more-icon" icon={MoreIcon} options={options} />
    </div>
  )
}
