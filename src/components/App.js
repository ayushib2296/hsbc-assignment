import React from "react";
import weatherapi from "../api/weatherAPI";
import testJSON from '../api/test.json';
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { cities: [], noOfCities: 0 };

  onSearchSubmit = async (term) => {
    // const response = await weatherapi.get("data/2.5/box/city", {
    //   params: {
    //     bbox: "12,32,15,37,10",
    //     appid: "b6907d289e10d714a6e88b30761fae22",
    //   },
    // });   //API NOT WORKING DUE TO CORS ISSUE 


    //below is the usage of test data

    const response = testJSON;
    this.setState({ cities: response.list });
    this.countCities(term);
  };

  countCities = (term) => {
    if (this.state.cities.length > 0) {
      var citiesArr = this.state.cities.filter((obj) => {
        return obj.name.toLowerCase().startsWith(term.toLowerCase());
      });
      this.setState({ noOfCities: citiesArr.length });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h1>Number of cities: {this.state.noOfCities>0?this.state.noOfCities : 'No cities found!'}</h1>
      </div>
    );
  }
}

export default App;
