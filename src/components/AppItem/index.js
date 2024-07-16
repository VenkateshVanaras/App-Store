// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="app-list">
      <img alt={appName} src={imageUrl} className="app-image" />

      <p className="app-name"> {appName} </p>
    </li>
  )
}
export default AppItem
