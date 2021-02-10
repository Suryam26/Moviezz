import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Button, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import InfoCard from "./Card";

const Navigation = () => {
    return (
        <Navbar color="dark">
            <Container>
                <Link to="/" className="ml-auto">
                    <Button>
                        <FontAwesomeIcon icon={faArrowLeft} />  Search
                    </Button>  
                </Link>
            </Container>
        </Navbar>
    );
}


class WishList extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <Container>
                    <Row>
                        <InfoCard />
                    </Row>
                </Container>
            </>
        );
    }
}

export default WishList;