import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Input, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import InfoCard from "./Card";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            Movies : [],
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    submit() {
        this.getMovies(this.state.value);
    }

    async getMovies(query) {
        if (query.length > 1) {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`);
            const data = await response.json();
            this.setState({
                Movies : data.results,
            })
        }
        else{
           this.setState({
                Movies : [],
            }) 
        }
  }

    render() {
        return (
            <>
                <Navbar color="dark">
                    <Container>
                        <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search" className="col mx-2" />
                        <Button className="mx-2" onClick={this.submit} >
                           <FontAwesomeIcon icon={ faSearch } />  Search
                        </Button>
                        <Link to="/wishlist">
                            <Button className="mx-2">
                               <FontAwesomeIcon icon={ faBookmark } />  WishList
                            </Button>
                        </Link>
                    </Container>               
                </Navbar>

                <Container>
                    <Row>
                        {this.state.Movies.map(movie => (
                                <Col key={movie.id} sm="12" md="6" lg="4" className="my-3">
                                    <InfoCard movie={movie} />
                                </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Search;