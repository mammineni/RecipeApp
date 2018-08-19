import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';


ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/addRecipe' component={AddRecipe} />
								<Route path='/editRecipe/:id' component={EditRecipe} />
      </div>
  </Router>,
  document.getElementById('root')
);


registerServiceWorker();
