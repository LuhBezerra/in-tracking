import { useCallback, useMemo } from 'react'
import classnames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'

import { LogoIcon } from 'assets/icons'
import { MoreActions, TabBar } from 'components/ui-kit'
import type { Tab, OptionMoreActions } from 'components/ui-kit'

import './index.scss'
import { useDispatch } from 'hooks/redux'
import { logOut } from 'modules/auth/actions'

type HeaderProps = {
  className?: string
}

const TABS: Tab[] = [
  { label: 'Home', ordering: '/' },
  { label: 'Relatórios', ordering: 'reports' },
]

const getLastPathName = (pathName: string) => {
  const splittedPathName = pathName.split('/')

  return splittedPathName[splittedPathName.length - 1]
}

export const Header = ({ className }: HeaderProps) => {
  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const onLogOut = useCallback(() => {
    dispatch(logOut())
    navigate('/login')
  }, [dispatch, navigate])

  const options = useMemo<OptionMoreActions[]>(
    () => [
      {
        onSelect: onLogOut,
        label: 'Sair',
      },
    ],
    [onLogOut]
  )

  return (
    <section className={classnames('header', className)}>
      <div className="header-content">
        <LogoIcon />
        <h1 className="logo-text">InTracking</h1>
        <MoreActions className="user-menu" options={options}>
          <p className="user-menu-text">Olá ...</p>
        </MoreActions>
      </div>
      <TabBar className="tab-bar" tabs={TABS} currentTab={getLastPathName(location.pathname)} />
    </section>
  )
}

export default Header
