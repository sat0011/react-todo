import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Table from './Table';
import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      characters: [
        {index:0, rows:{fname:"111", lastname:'112', email:'11@gmail.com'}},
        {index:1, rows:{fname:"211", lastname:'212', email:'22@gmail.com'}}
      ]
    };
    this.remove_character = this.remove_character.bind(this);
    this.handle_submit = this.handle_submit.bind(this);
  }
  remove_character(index) {
    let characters = this.state.characters;
    characters.splice(index, 1);
    this.setState( {
      characters: characters
    });
  }

  handle_submit(character_data) {
    console.log(character_data);
    let characters = this.state.characters;
    characters.push({index:characters.length+1, rows:{fname:character_data.fname, lastname:character_data.lastname, email:character_data.email}});
    this.setState( {
      characters: characters
    });
    return 0;
  }

  render() {
    return (
      <div className="App">
        <Form
          handle_submit={this.handle_submit}
        />
        <Table
          characters={this.state.characters}
          removeCharacter={this.remove_character}
        />
      </div>
    );
  }
}

export default App;
