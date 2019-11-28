import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

class MovieComponent extends Component {
    render() {
        return (
           
              <Col md="2">
                            <div>
                            <a href={'/moviedetails/'+ this.props.movie.imdbID}>
                            <img className="poster2" src={this.props.movie.Poster} alt="" height="90" width="90" />
                            </a>
                            </div>
                            <div className="title2">
                                {this.props.movie.Title}
                            </div>
                </Col>  
    
        );
    }
}

export default MovieComponent;