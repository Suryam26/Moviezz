import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Input, Button, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import InfoCard from "./Card";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value : '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
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
                        <InfoCard />
                    </Row>
                </Container>
            </>
        );
    }
}

export default Search;