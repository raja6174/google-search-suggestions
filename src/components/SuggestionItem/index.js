// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateValue} = props
  const {suggestion} = suggestionItem
  const onUpdateSearchValue = () => {
    updateValue(suggestion)
  }

  return (
    <li className="suggestion">
      <p>{suggestion}</p>
      <button type="button" className="button" onClick={onUpdateSearchValue}>
        <img
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
