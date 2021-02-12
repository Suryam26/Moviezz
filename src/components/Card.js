import React from "react";
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function InfoCard ({ movie }) {
        return (
            <Card color="dark">
                <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path }`} alt={ movie.title } />
                <CardBody>
                    <CardTitle tag="h5">{ movie.title }</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date: { movie.release_date }</CardSubtitle>
                    <CardText>{ movie.overview }</CardText>
                    <Button className="px-3">
                        <FontAwesomeIcon icon={faBookmark} />
                    </Button>
                </CardBody>
            </Card>            
        );
}

export default InfoCard;