import { Menu as ReachMenu, MenuList, MenuItem, MenuButton } from '@reach/menu-button'
import classnames from 'classnames'
import '@reach/menu-button/styles.css'
import type { ReactNode, FunctionComponent } from 'react'

import './styles.scss'

export type OptionMoreActions = {
  onSelect: () => void
  label: string
  disabled?: boolean
}

type MoreActionsProps = {
  className?: string
  icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>
  title?: string
  options: OptionMoreActions[]
  children?: ReactNode
}

export const MoreActions = ({ icon, title, options, className, children }: MoreActionsProps) => {
  const Icon = icon

  return (
    <ReachMenu>
      <MenuButton aria-label="More actions" className={classnames(className, 'menu-wrapper')}>
        {children ||
          (icon && (
            <span title={title} className={'edit-button'}>
              {/* @ts-ignore */}
              <Icon className={'menu-icon'} />
            </span>
          ))}
      </MenuButton>
      <MenuList className={'menu-list'}>
        {options.map(item => (
          <MenuItem
            key={item.label}
            onSelect={item.onSelect}
            disabled={item.disabled}
            className={'menu-item'}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </ReachMenu>
  )
}
