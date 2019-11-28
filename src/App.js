import React from 'react';
import './App.css';
import MainComponent from './Components/MainComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetails from './Components/MovieDetails';


function App() {
  return (
    <div className="App">
        <Router>
                <Route path="/" exact component={MainComponent}/>
                <Route path="/moviedetails/:movieId" component={MovieDetails}/>
            </Router>

    </div>
  );
}

export default App;
