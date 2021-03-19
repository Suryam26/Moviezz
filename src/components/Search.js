import React from "react";
import Display from "./Display";
import SearchBar from "./SearchBar";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Movies: [],
            Message: '',
        };
        this.getMovies = this.getMovies.bind(this);
    }

    componentDidMount() {
        const param = this.props.match.params.query ? this.props.match.params.query : null;
        this.getMovies(param);
    }

    async getMovies(query) {
        if (query) {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
            const data = await response.json();
            this.setState({
                Movies: data.results,
                Message: `Search results for "${query}"`, 
            });
        }
        else {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            this.setState({
                Movies: data.results,
                Message: `Trending this week`,
            });
        }
    }

    render() {
        return (
            <>    
                <SearchBar />
                <Display
                    movies={this.state.Movies}
                    message={this.state.Message}
                />
            </>
        );
    }
}

export default Search;