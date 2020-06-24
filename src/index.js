import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/searchBar.js';
import ImageDisplay from './components/imageDisplay.js';

const API = "https://pixabay.com/api/?key=17161981-90d466c25acd7e27181ed309f&q="

class App extends React.Component{

  state={
    receivedData: [],
    loading: false
  }

  search = async(searchParam) => {
    this.setState({
      loading: true
    }, () => {
      let url = API + searchParam + "&image_type=photo&pretty=true";
      fetch(url)
      .then((res) => res.json())
      .then ((data) => {
        this.setState({
          receivedData: data
        }, () => {
          this.setState({
            loading: false
          })
          console.log(this.state.receivedData)
        })
      })
    })
  }

  render(){
    return(
      <>
      <SearchBar search={this.search} />
      {this.state.receivedData.length !== 0 &&
        <ImageDisplay data = {this.state.receivedData.hits} loading = {this.state.loading} />
      }
      </>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
