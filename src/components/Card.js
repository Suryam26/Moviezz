import React from "react";
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';

const InfoCard = ({ movie, add, remove, check }) => {
    const addButton =
        <Button className="px-3" type="button" onClick={add} >
            <FontAwesomeIcon icon={faBookmark} />
        </Button>;
    
    const removeButton =
        <Button className="px-3" type="button" onClick={remove}>
            <FontAwesomeIcon icon={faBookmarkSolid} />
        </Button>;
    
    return (
            <Card color="dark">
                {/* <a href={`https://api.themoviedb.org/3/movie/${ movie.id }?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`}></a> */}
                <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w300/${ movie.poster_path }`} alt={ movie.title } />
                <CardBody>
                    <a href={`https://api.themoviedb.org/3/movie/${ movie.id }?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`}>
                        <CardTitle tag="h5">{ movie.title }</CardTitle>
                    </a>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date: { movie.release_date }</CardSubtitle>
                    <CardText>{movie.overview}</CardText>
                    {check ? removeButton : addButton}
                </CardBody>
            </Card>
    );
}

export default InfoCard;