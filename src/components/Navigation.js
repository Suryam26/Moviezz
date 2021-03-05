import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Collapse, NavbarToggler,
    NavbarBrand, Nav, NavItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBookmark } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { navOpen: false };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render () {
        return (
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand>Moviezz</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.navOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="mx-md-2 my-2 mx-auto">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHome} />  Home
                                </Link>
                        </NavItem>
                            <NavItem className="mx-md-2 my-2 mx-auto">
                                <Link to="/wishlist">
                                    <FontAwesomeIcon icon={faBookmark} />  WishList 
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;