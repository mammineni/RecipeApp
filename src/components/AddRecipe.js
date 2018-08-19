import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from 'mdbreact';

class AddRecipe extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      ingredients: '',
      addedDate: '',
      url: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  

  onSubmit = (e) => {
    e.preventDefault();

    const { id, name, ingredients, addedDate, url } = this.state;
       
    if (!name || !ingredients || !addedDate) {
      window.alert("Name, Ingredients, Added are mandatory fields");
    } else {

    axios.post('/api/addRecipe', { id, name, ingredients, addedDate, url })
      .then((result) => {
        this.props.history.push("/")
      });
    }

  }

  render() {
    const {  id, name, ingredients, addedDate, url } = this.state;
    return (
      
      <Fragment>
     <div className="App">
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Recipes Application</h1>
        </header>
      </div>
     <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD Recipe
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Recipes List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name : </label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Recipe Name" />
              </div>
              <div className="form-group">
                <label htmlFor="ingredients">Ingredients : </label>
                <input type="text" className="form-control" name="ingredients" value={ingredients} onChange={this.onChange} placeholder="Ingredients" />
              </div>
              <div className="form-group">
                <label htmlFor="addedDate">Added Date : </label>
                <input type="text" className="form-control" name="addedDate" value={addedDate} onChange={this.onChange} placeholder="yyyy-mm-dd" />
              </div>
              <div className="form-group">
                <label htmlFor="url">Url : </label>
                <input type="text" className="form-control" name="url" value={url} onChange={this.onChange} placeholder="Url" />
              </div>
              <Button color="primary" type="submit" 
									  				 style={{ marginBottom: "1rem" }}>
									      	Submit
														</Button>
            </form>
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default AddRecipe;

