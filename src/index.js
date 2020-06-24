import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/searchBar.js';
import ImageDisplay from './components/imageDisplay.js';
import Home from './components/home';

const API = "https://pixabay.com/api/?key=17161981-90d466c25acd7e27181ed309f&q="

class App extends React.Component{

  state={
    receivedData: [],
    searchParam: "",
    loading: false,
    page: 1
  }

  setSearchParam = (x) => {
    x.length !== 0 &&
    this.setState({
      searchParam: x,
      page: 1
    }, () => {
      this.search()
    })
  }

  search = async() => {
    this.setState({
      loading: true
    }, () => {
      let url = API + this.state.searchParam + "&image_type=photo&pretty=true&page=" + this.state.page;
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

  nextPage = () =>{
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.search()
    })
  }

  prevPage = () => {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.search()
    })
  }

  render(){
    return(
      <>
      <SearchBar setSearchParam={this.setSearchParam} />
      {this.state.receivedData.length !== 0 ?
        <ImageDisplay data = {this.state.receivedData.hits} loading = {this.state.loading} page = {this.state.page} nextPage ={this.nextPage} prevPage = {this.prevPage} />
        :
        <Home />
      }
      </>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
