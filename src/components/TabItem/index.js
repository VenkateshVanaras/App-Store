// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {displayText} = tabDetails
  const getChangeTab = () => {
    changeTab(tabDetails.tabId)
  }

  const styelForButton = isActive ? 'color-bottom' : ''

  return (
    <li className="list-item">
      <button
        className={`button ${styelForButton}`}
        onClick={getChangeTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
