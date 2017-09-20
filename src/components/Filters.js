import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: props.filters.type
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFindPet = this.handleFindPet.bind(this)
  }


  handleFindPet() {
    this.props.onFindPetsClick()
  }

  handleFilterChange(event) {
    let type = event.target.value
    this.props.onChangeType(type)

    this.setState({
      currentFilter: type
    })
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterChange} value={this.state.currentFilter}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPet}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
