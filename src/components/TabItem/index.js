// Write your code here
import './index.css'

const TabItem = (props) => {
    const {tabDetails, changeAppCategory, isActive} = props
    const {tabId, displayText} = tabDetails

    const onClickChangeCategory = () => {
        changeAppCategory(tabId)
    }

    const isActiveTabClassName = isActive ? "active-tab" : ""

    return(
        <li className="tab">
            <button onClick={onClickChangeCategory} type="button" className={`tab-button ${isActiveTabClassName}`}> {displayText} </button>
        </li>
    )
}

export default TabItem