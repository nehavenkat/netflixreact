import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import CommentComponent from './CommentComponent';


class MovieDetails extends Component {
    state = {
        movie:null

    }
    componentDidMount() {
        fetch ("http://www.omdbapi.com/?apikey=80be0124&i="+ this.props.match.params.movieId)
        .then(response => response.json())
        .then(response =>{ 
        this.setState({movie:response});
        })
    }
    render() {
        return (
            this.state.movie && 
           <>
             <div className={'container-fluid'}>
            <NavbarComponent /> 
            </div>
            <div>
            
            <img src={this.state.movie.Poster}></img>
            </div>
            <div className={'container-flex col-5'}>

            <CommentComponent  elementId={this.props.match.params.movieId} />
            
            </div>
            </>
        );
    }
}

export default MovieDetails;