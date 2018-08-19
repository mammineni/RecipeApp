import React, {Component} from 'react';
import { Button, Collapse } from 'mdbreact';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Recipe extends Component {
	 constructor(props) {
				super(props);
				this.toggle = this.toggle.bind(this);
				this.recipe = this.props.recipe;
				this.state = {
					collapse : false,
					id : this.props.recipe.id
				}
		}



		toggle = () => {
    this.setState({
         collapse : !this.state.collapse
				});
		}

		
		onDelete = (id, e) => {
			e.preventDefault();

			axios.delete(`/api/recipe/${id}`)
				.then((result) => {
					window.location.reload();
				});
		}
	
		render() {
			 return (
					 <div className='row'>
						  <div className="col-md-5">
							  <span><h4>{this.recipe.name}</h4></span>
        </div>
				 <div className="col-md-3">
							 <h4><Link to={`/editRecipe/${this.recipe.id}`}>Edit Recipe</Link></h4>
					</div>
					<div className="col-md-3">
									<button  className="btn btn-default" 
									onClick={this.onDelete.bind(this, this.recipe.id)}>
										<span className="glyphicon glyphicon-minus-sign" 
 					    	      aria-hidden="true"></span>
										Delete Recipe</button>
           </div>
					 <div className="col-md-1">
									 <Button color="primary" onClick={this.toggle} 
									   style={{ marginBottom: "1rem" }}>
									       {this.state.collapse ? "-" : "+"}
										</Button>
           </div>
          <Collapse isOpen={this.state.collapse}>
										   <div className="col-md-10 details"> 
														  <span> Recipe Ingredients  : </span> <span>{this.recipe.ingredients} </span><br /> 
															<span> Recipe Added Date  : </span> <span> {this.recipe.addedDate} </span><br />
														  <span> Recipe Url   : </span> <span>{this.recipe.url} </span>
															</div>
          </Collapse>
								
        </div>
				)
		}
}

export default Recipe