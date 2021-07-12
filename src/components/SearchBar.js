import React from "react";

class SearchBar extends React.Component {

  state = { city: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.city)
  }; 


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Enter City Name</label>
            <input
              type="text"
              value={this.state.city}
              onChange={(e) => this.setState({ city: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
