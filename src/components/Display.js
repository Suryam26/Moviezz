import React from "react";
import { Container, Row, Col } from "reactstrap";
import InfoCard from "./Card";

const Display = ({ movies, add, remove }) => {
    let willDisplay = movies.length > 0 ? true : false;
    const list = movies.map(movie => (
        <Col key={movie.id} sm="12" md="6" lg="4" className="my-3">
            <InfoCard movie={movie} add={() => add(movie)} remove={() => remove(movie.id)} />
        </Col>
    ));
    const Message = <center className="col m-5"><h1>Movie not Found</h1></center>;
    
    return (
        <Container>
            <Row>
                {willDisplay ? list : Message}
            </Row>
        </Container>
    );
}

export default Display;