import { Menu as ReachMenu, MenuList, MenuItem, MenuButton } from '@reach/menu-button'
import classnames from 'classnames'
import '@reach/menu-button/styles.css'

import './styles.scss'

export const MoreActions = ({ icon, title, options, className, children }) => {
  const Icon = icon

  return (
    <ReachMenu>
      <MenuButton
        aria-label="More actions"
        className={classnames(className, 'menu-wrapper')}
      >
        {children || (
          <span title={title} className={'edit-button'}>
            <Icon className={'menu-icon'} />
          </span>
        )}
      </MenuButton>
      <MenuList className={'menu-list'}>
        {options.map(item => (
          <MenuItem
            key={item.label}
            onSelect={item.onSelect}
            disabled={item.disabled}
            className={'menu-item'}
          >
            {item.icon ? (
              <span className={'menu-item-content'}>
                <Icon icon={item.icon} className={'menu-item-content-icon'} />
                {item.label}
              </span>
            ) : (
              item.label
            )}
          </MenuItem>
        ))}
      </MenuList>
    </ReachMenu>
  )
}
