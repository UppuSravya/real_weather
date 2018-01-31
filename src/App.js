import React, { Component } from 'react';
import SearchBar from './containers/searchbar';
import WeatherList from './containers/weatherlist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <SearchBar />
       <WeatherList />
      </div>
    );
  }
}

export default App;
