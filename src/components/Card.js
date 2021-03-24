import React from "react";
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';

const InfoCard = ({ movie, add, remove, check }) => {
    const months = {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
    };
    const newDate = movie.release_date.split("-");
    const date = `${newDate[2]} ${months[newDate[1]]} ${newDate[0]}`;

    const addButton =
        <Button className="mr-0 px-3" type="button" onClick={add} >
            <FontAwesomeIcon icon={faBookmark} />
        </Button>;
    
    const removeButton =
        <Button className="px-3" type="button" onClick={remove}>
            <FontAwesomeIcon icon={faBookmarkSolid} />
        </Button>;
    
    const overview = movie.overview.length > 100 ? movie.overview.slice(0, 97) + '...' : movie.overview;
    return (
        <Card id="search" color="dark" inverse>
            <Link to={`/detail/${movie.id}`}>
                <CardImg top width="100%" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            </Link>
            <CardBody>
                <Link to={`/detail/${movie.id}`}>
                    <CardTitle tag="h5">{ movie.title }</CardTitle>
                </Link>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date: { date }</CardSubtitle>
                <CardText>{overview}</CardText>
                {check ? removeButton : addButton}
            </CardBody>
        </Card>
    );
}

export default InfoCard;