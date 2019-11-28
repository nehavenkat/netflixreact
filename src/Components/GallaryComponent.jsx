import React, { Component } from 'react';
import { Container, Row, Input } from 'reactstrap';
import MovieComponent from './MovieComponent';


class GallaryComponent extends Component {
    state = {
        search: "",
        selectedmovie: undefined,
        movies: [], //please define empty object props
        trending: [] ,
        watching: [],
        releasing:[]
    }


    componentDidMount = async () => {
        let response1 = await fetch("http://www.omdbapi.com/?apikey=80be0124&s=harry%20potter")

        let trending = await response1.json();
        this.setState({ trending: trending.Search });
        //this.setState({ movies: releasing.Search });
        console.log(trending);
    

        let response2 = await fetch("http://www.omdbapi.com/?apikey=80be0124&s=terminator")

        let watching = await response2.json();

        this.setState({ watching: watching.Search });
        console.log(watching);
        

        let response3 = await fetch("http://www.omdbapi.com/?apikey=80be0124&s=sister%20act")

        let releasing = await response3.json();
        //you need to save  it to the state
        this.setState({ releasing: releasing.Search });
        console.log(releasing);
        
    }


    render() {
        
        //you need to get it from the state
        const trendingNow = this.state.trending.map(movie => {
            return (
                <MovieComponent movie={movie}></MovieComponent>
                       
            )}
        );

        const watchingNow = this.state.watching.map(movie => {
            return (
                <MovieComponent movie={movie}></MovieComponent>
            )});

        const releasingNow = this.state.releasing.map(movie => {
            return (
                <MovieComponent movie={movie}></MovieComponent>
                )
        });


        const filteredTMovies = this.state.trending.filter(movie => movie.Title.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log(filteredTMovies);
        const filteredWMovies = this.state.watching.filter(movie => movie.Title.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log(filteredWMovies);
        const filteredRMovies = this.state.releasing.filter(movie => movie.Title.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log(filteredRMovies);
        let filteredTrending = null;
        let filteredWatching = null;
        let filteredReleasing = null; 

        if (filteredTMovies){
        filteredTrending = filteredTMovies.map(movie => {
            return (
                <MovieComponent movie={movie}></MovieComponent>
            )
        });
    }
    if(filteredWMovies){
        filteredWatching = filteredWMovies.map(movie => {
            return (
                
                <MovieComponent movie={movie}></MovieComponent>
                  )
        });
    }
    
    if(filteredRMovies){
        filteredReleasing = filteredRMovies.map(movie => {
            return (
                
                <MovieComponent movie={movie}></MovieComponent>
                )
        });

    }



        return (
            <div>
                <Container>
                <Input type="text" value={this.state.search} onChange={(val) => this.setState({ search: val.target.value.toLowerCase() })} placeholder="Type to search"></Input>
                
                <h6>Trending Now</h6>
                <Row>
                        {/* you need to insert the cosnt that you created before */}
                        {filteredTrending? filteredTrending :trendingNow }


                </Row>

                <h6>Watch Again</h6>
                <Row>
                    
                        {/* you need to insert the cosnt that you created before */}
                        {filteredWatching? filteredWatching : watchingNow}
                
                </Row>
                <h6>New Releases</h6>
                <Row>
                    
                        {/* you need to insert the cosnt that you created before */}
                        {filteredReleasing? filteredReleasing : releasingNow}
                    
                </Row>
            </Container>
            </div>            

        )
    }
}
export default GallaryComponent;