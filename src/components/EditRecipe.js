import React, { Component , Fragment} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'mdbreact';
class EditRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
  }

  componentDidMount() {
			
			const {id} = this.props.match.params

			 console.log({id});
    axios.get('/api/recipe/'+id)
      .then(res => {
        this.setState({ recipe: res.data });
      });
  }

  onChange = (e) => {
    const state = this.state.recipe
    state[e.target.name] = e.target.value;
    this.setState({recipe:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

				
				const {  name, ingredients, addedDate, url } = this.state.recipe;
				const { id } = this.props.match.params;

				if (!name || !ingredients || !addedDate) {
					window.alert("Name, Ingredients, Added are mandatory fields");
			 } else {
     axios.put(`/api/recipe/${this.props.match.params.id}`, { id , name, ingredients, addedDate, url })
      .then((result) => {
        this.props.history.push("/")
						});
					}
  }

  render() {
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
              Edit Recipe
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
												<div className="form-group">
                <label htmlFor="name">Name : </label>
																<input type="text" className="form-control" name="name" value={this.state.recipe.name} 
																onChange={this.onChange} placeholder="Recipe Name" />
              </div>
              <div className="form-group">
                <label htmlFor="ingredients">Ingredients : </label>
																<input type="text" className="form-control" name="ingredients" 
																value={this.state.recipe.ingredients} onChange={this.onChange} placeholder="Ingredients" />
              </div>
              <div className="form-group">
                <label htmlFor="addedDate">Added Date : </label>
																<input type="text" className="form-control" name="addedDate"
																 value={this.state.recipe.addedDate} onChange={this.onChange} placeholder="yyyy-mm-dd" />
              </div>
              <div className="form-group">
                <label htmlFor="url">Url : </label>
																<input type="text" className="form-control" name="url"
																 value={this.state.recipe.url} onChange={this.onChange} placeholder="Url" />
              </div>
														<Button color="primary" type="submit" 
									  				 style={{ marginBottom: "1rem" }}>
									      	Update
														</Button>
              
            </form>
          </div>
        </div>
      </div>
						</Fragment>
    );
  }
}

export default EditRecipe;
