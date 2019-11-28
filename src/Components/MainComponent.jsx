import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import GallaryComponent from './GallaryComponent';

import { Container} from "reactstrap"


class MainComponent extends Component {
    state = {
        
        selectedmovie: undefined
        
      }

      selectedmovie = (movie) =>{
        this.setState({
            selectedmovie: movie
        })
      }
    render() {
        return (
            <Container>
                <NavbarComponent/>
                <h1 className="my-5">Movies
            
                </h1>
               
               <GallaryComponent filter={this.state.search} onmovieSelected={this.selectmovie}></GallaryComponent>

            
             </Container>
        );
    }
}

export default MainComponent;