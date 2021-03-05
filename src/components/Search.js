import React from "react";
import { Container, Navbar, Input, Button, Form } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Display from "./Display";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    submit(event) {
        event.preventDefault();
        this.props.getMovies(this.state.value);
    }

    render() {
        return (
            <Navbar color="dark" dark>
                <Container>
                    <Form className="col p-0" onSubmit={this.submit} inline >
                        <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" className="col" />
                        <Button className="mx-2" type="submit" >
                            <FontAwesomeIcon icon={ faSearch } />  Search
                        </Button>
                    </Form>
                </Container>               
            </Navbar>
        );
    }
}


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Movies : [] };
        this.getMovies = this.getMovies.bind(this);
        this.getTrend = this.getTrend.bind(this);
    }

    componentDidMount() {
        this.getTrend();
    }

    async getTrend() {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        this.setState({
            Movies : data.results,
        })
    }

    async getMovies(query) {
        if (query) {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
            const data = await response.json();
            this.setState({
                Movies : data.results,
            })
        }
        else{
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            this.setState({
                Movies : data.results,
            })
        }
    }

    render() {
        return (
            <>
                <SearchBar getMovies={(query) => this.getMovies(query) } />
                <Display movies={ this.state.Movies } add={(movie) => this.props.add(movie)} remove={(id) => this.props.remove(id)} />
            </>
        );
    }
}

export default Search;