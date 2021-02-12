import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Input, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import InfoCard from "./Card";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            Movies : [],
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
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
                        <Link to="/wishlist">
                            <Button>
                               <FontAwesomeIcon icon={ faBookmark } />  WishList
                            </Button>
                        </Link>
                    </Container>               
                </Navbar>

                <Container>
                    <Row>
                        {this.state.Movies.map(movie => (
                                <Col key={movie.id} sm="12" md="6" lg="4" className="my-3 mx-auto">
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