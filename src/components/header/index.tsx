import { useMemo } from 'react'
import classnames from 'classnames'
import { useLocation } from 'react-router-dom'

import { LogoIcon } from 'assets/icons'
import { MoreActions, TabBar } from 'components/ui-kit'
import type { Tab, OptionMoreActions } from 'components/ui-kit'

import './index.scss'

type HeaderProps = {
  className?: string
}

const TABS: Tab[] = [
  { label: 'Home', ordering: '' },
  { label: 'Relatórios', ordering: 'reports' },
]

const getLastPathName = (pathName: string) => {
  const splittedPathName = pathName.split('/')

  return splittedPathName[splittedPathName.length - 1]
}

export const Header = ({ className }: HeaderProps) => {
  const location = useLocation()

  const options = useMemo<OptionMoreActions[]>(
    () => [
      {
        onSelect: () => {},
        label: 'Sair',
      },
    ],
    []
  )

  return (
    <section className={classnames('header', className)}>
      <div className="header-content">
        <LogoIcon />
        <h1 className="logo-text">InTracking</h1>
        <MoreActions className="user-menu" options={options}>
          <p className="user-menu-text">Olá, Maria</p>
        </MoreActions>
      </div>
      <TabBar className="tab-bar" tabs={TABS} currentTab={getLastPathName(location.pathname)} />
    </section>
  )
}

export default Header
