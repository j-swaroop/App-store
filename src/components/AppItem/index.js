// Write your code here
import './index.css'

const AppItem = (props) => {
    const {appDetails} = props
    const {appId, appName, imageUrl, category} = appDetails
    return(
        <li className="app-container">
            <img alt={appName} className="app-image" src={imageUrl}/>
            <p className="app-name"> {appName} </p>
        </li>
    )
}

export default AppItem