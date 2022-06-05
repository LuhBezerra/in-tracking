import { useCallback, useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import './styles.scss'

export type Tab = {
  label: string
  ordering: string
}
type TabBarProps = {
  className?: string
  tabs: Tab[]
  currentTab?: string
}

export const TabBar = ({ className, tabs, currentTab }: TabBarProps) => {
  const [activeTab, setActiveTab] = useState<Tab['ordering']>(
    currentTab ? currentTab : tabs[0].ordering
  )

  const onTabClick = useCallback(event => setActiveTab(event.currentTarget.id), [])

  return (
    <div className={classnames('tab-navigation', className)}>
      <div className="container">
        {tabs.map(tab => (
          <Link
            id={tab.ordering}
            to={tab.ordering}
            onClick={onTabClick}
            key={tab.label}
            className={classnames('item', {
              active: tab.ordering === activeTab,
            })}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
