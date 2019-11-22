import React, { Component } from 'react';
import { Input, h1 } from 'reactstrap';

class GallaryComponent extends Component {
    state = {
        search: "",
        selectedBook: undefined,
        movies: [] //please define empty object props
    }
    

    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?apikey=80be0124&s=harry%20potter")

        let trending = await response.json();
        //you need to save  it to the state
        this.setState({ movies: trending.Search })
        console.log(trending);
    }

    render() {
        //you need to get it from the state
        const trendingNow = this.state.movies.map(movie => {
            return (
                <table>
                    <tr key={movie.imdbID}>
                        <td>{movie.Title}</td>
                        <td>{movie.Year}</td>
                        <td>{movie.Type}</td>
                        <td>
                            <img src={movie.Poster} alt={movie.title} height="90" width="90" />
                        </td>
                    </tr>
                </table>)
        });

        return (
            <div>
                <h1 className="my-5">Movies
            <Input type="text" value={this.state.search} onChange={(val) => this.setState({ search: val.target.value.toLowerCase() })} placeholder="Type to search"></Input>
                </h1>
                <h6>Trending Now</h6>

                {/* you need to insert the cosnt that you created before */}
                        {trendingNow}
                <h6>Watch Agian</h6>
                <h6>New Releases</h6>
            </div>
        );
    }
}
export default GallaryComponent;