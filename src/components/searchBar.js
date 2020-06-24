import React from 'react';
import './stylesheets/searchBar.css';

class SearchBar extends React.Component{
    state={
        searchInput : ""
    }

    handleSearchInput = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    render(){
        return(
            <div className = "search-bar">
                <input type="text" value={this.state.searchInput} onChange={this.handleSearchInput} />
                <button onClick={() => {this.props.setSearchParam(this.state.searchInput)}}>Search</button>
            </div>
        )
    }
}

export default SearchBar;