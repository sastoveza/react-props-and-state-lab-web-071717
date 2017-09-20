import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onFilterChange = this.onFilterChange.bind(this)
    this.onFindPets = this.onFindPets.bind(this)
    this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onFilterChange(filter) {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  onFindPets() {
    if(this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(res => res.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
    } else {
        fetch('/api/pets?type=' + this.state.filters.type)
        .then(res => res.json())
        .then(json => {
          this.setState({
            pets: json
          })
        })
    }
  }


  onAdoptPet(id) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPets} onChangeType={this.onFilterChange} filters={{type: 'all'}}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;