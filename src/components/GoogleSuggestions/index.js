// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onUpdateSearchValue = updatedValue => {
    this.setState({
      searchInput: updatedValue,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="google-search-container">
        <div className="sub-google-search-container">
          <img
            className="google-logo"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-suggestions-container">
            <div className="search-input-container">
              <img
                className="search-icon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-container">
              {searchResults.map(each => (
                <SuggestionItem
                  suggestionItem={each}
                  key={each.id}
                  updateValue={this.onUpdateSearchValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
