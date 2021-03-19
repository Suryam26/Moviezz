import React from "react";
import { Container, Row, Col } from "reactstrap";
import InfoCard from "./Card";
import wishlistContext from "../context/wishlistContext";

const Display = ({ movies, message }) => {
    let willDisplay = movies.length > 0 ? true : false;
    const errorMessage = <center className="col m-5"><h2>Movie not Found</h2></center>;
    
    const list = movies.map(movie => (
        <Col key={movie.id} sm="12" md="6" lg="4" className="my-3">
            <wishlistContext.Consumer>
                {
                    value =>
                    <InfoCard
                        movie={movie}
                        add={() => value.add(movie)}
                        remove={() => value.remove(movie.id)}
                        check={value.check(movie.id)}   
                    />
                }
            </wishlistContext.Consumer>
        </Col>
    ));
    
    return (
        <Container>
            <h2 className="my-4"><center>{message}</center></h2>
            <Row>
                {willDisplay ? list : errorMessage}
            </Row>
        </Container>
    );
}

export default Display;