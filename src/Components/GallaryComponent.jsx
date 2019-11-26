import React, { Component } from 'react';
import { Input, Container, Row, Col } from 'reactstrap';


class GallaryComponent extends Component {
    state = {
        search: "",
        selectedBook: undefined,
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
        const trendingNow = this.state.trending.map(movie1 => {
            return (
            
                        <Col md="2">
                            <div>
                                <img className="poster1" src={movie1.Poster} alt="" height="90" width="90" />
                            </div>
                            <div className="title1">
                                {movie1.Title}
                                {movie1.Year}
                            </div>
                        </Col>
            )
        });

        const watchingNow = this.state.watching.map(movie2 => {
            return (
                
                        <Col md="2">
                            <div>
                                <img className="poster2" src={movie2.Poster} alt="" height="90" width="90" />
                            </div>
                            <div className="title2">
                                {movie2.Title}
                            </div>
                        </Col>
                  )
        });

        const releasingNow = this.state.releasing.map(movie3 => {
            return (
                
                        <Col md="2">
                            <div>
                                <img className="poster3" src={movie3.Poster} alt="" height="90" width="90" />
                            </div>
                            <div className="title3">
                                {movie3.Title}
                            </div>
                        </Col>
                )
        });


        return (
            <div>
                <h1 className="my-5">Movies
            <Input type="text" value={this.state.search} onChange={(val) => this.setState({ search: val.target.value.toLowerCase() })} placeholder="Type to search"></Input>
                </h1>
                <Container>
                <h6>Trending Now</h6>
                <Row>
                        {/* you need to insert the cosnt that you created before */}
                        {trendingNow}

                </Row>

                <h6>Watch Again</h6>
                <Row>
                    
                        {/* you need to insert the cosnt that you created before */}
                        {watchingNow}
                
                </Row>
                <h6>New Releases</h6>
                <Row>
                    
                        {/* you need to insert the cosnt that you created before */}
                        {releasingNow}
                    
                </Row>
            </Container>
            </div>            

        );
    }
}
export default GallaryComponent;