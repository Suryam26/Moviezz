import React from "react";
import { Container, Navbar, Input, Button, Form } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        const redirect = this.state.value ? `/search/${this.state.value}` : `#`;
        return (
            <Navbar color="dark" dark>
                <Container>
                    <Form className="col p-0" action={redirect} inline >
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

export default SearchBar;