import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Recipe from './components/Recipe';
import {Link} from 'react-router-dom';



class App extends Component {

  state = {
    isLoading : true,
    recipes : []
  }



  async componentDidMount() {
    console.log('here');
    axios.get('/api/recipes')
    .then(res => {
      this.setState({
         recipes: res.data , 
        isLoading : false
      });
    });
  }

  render() {

    const {recipes, isLoading} = this.state;
  
    if (isLoading) {
      return <p> Loading ... </p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Recipes Application</h1>
        </header>
        <div className="App-intro">

         <br/>
         
          <h3>List of Recipes </h3> 
           {
              recipes.map((recipe) => {
                return <Recipe recipe={recipe}></Recipe>
             })
           }
          
           <br />
           <h4><Link to="/addRecipe"><span className="glyphicon glyphicon-plus-sign" 
           aria-hidden="true"></span> Add Recipe</Link></h4>
        </div>
      </div>
    );
  }
}

export default App;
