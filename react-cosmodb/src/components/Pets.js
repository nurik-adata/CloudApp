import React, { Component } from 'react';

import EditPet from './EditPet';
import Pet from './Pet';

import api from '../api';

class Pets extends Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      creatingPet: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ pets: json }));
  }

  handleSelect(pet) {
    this.setState({ selectedPet: pet });
  }

  handleDelete(event, pet) {
    event.stopPropagation();

    api.destroy(pet).then(() => {
      let pets = this.state.pets;
      pets = pets.filter(h => h !== pet);
      this.setState({ pets: pets });

      if (this.selectedPet === pet) {
        this.setState({ selectedPet: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingPet: true,
      selectedPet: { id: '', name: '', description: '', price: '' }
    });
  }

  handleCancel() {
    this.setState({ addingPet: false, selectedPet: null });
  }

  handleSave() {
    let pets = this.state.pets;

    if (this.state.addingPet) {
      api
        .create(this.state.selectedPet)
        .then(result => {
          console.log('Successfully created!');

          pets.push(this.state.selectedPet);
          this.setState({
            pets: pets,
            selectedPet: null,
            addingpet: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedPet)
        .then(() => {
          this.setState({ selectedPet: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedPet = this.state.selectedPet;
    selectedPet[event.target.name] = event.target.value;
    this.setState({ selectedPet: selectedPet });
  }

  render() {
    return (
      <div>
        <ul className="pets">
          {this.state.pets.map(pet => {
            return (
              <Pet
                key={pet.id}
                pet={pet}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedPet={this.state.selectedPet}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Pet</button>
          <EditPet
            addingPet={this.state.addingPet}
            onChange={this.handleOnChange}
            selectedPet={this.state.selectedPet}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Pets;