import React from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, CardImgOverlay, Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const DetailCard = ({ movieDetail }) => {
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
    const newDate = movieDetail.release_date.split("-");
    const date = `${newDate[2]} ${months[newDate[1]]} ${newDate[0]}`;

    const time = `${Math.floor(movieDetail.runtime / 60)}hrs ${movieDetail.runtime % 60}min`;
        
    const popular = (list) => {
        let min = 1000000;
        let minId;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id < min) {
                min = list[i].id;
                minId = i;
            }
        }
        return minId;
    };
    const companyId = popular(movieDetail.production_companies);

    const genereList = (list) => {
        let string = list[0].name;
        for (let i = 1; i < list.length; i++){
            string = string + ", " + list[i].name;
        }
        return string;
    };
    const genre = genereList(movieDetail.genres);

    return (
        <>
            <Card id="top" inverse>
                <CardImg top width="100%" src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`} alt={ movieDetail.title } />
                <CardImgOverlay className="p-3">
                    <div id="title">
                        <CardSubtitle tag="h5" className="mb-2">Raiting: { movieDetail.vote_average }/10</CardSubtitle>
                        <CardTitle tag="h1">{movieDetail.title}</CardTitle>
                    </div>
                </CardImgOverlay>
            </Card>

            <Card id="bottom" className="p-4" color="muted">
                <Row>

                    <Card className="col-lg-5 mx-auto my-2">
                        <CardBody>
                            <CardTitle tag="h2">Info</CardTitle>
                            <CardText>Release Date: { date }</CardText>
                            <CardText>Running time: {time}</CardText>
                            <CardText>Production Company: {movieDetail.production_companies[companyId].name}</CardText>
                            <CardText>Genres: {genre} </CardText>
                            <CardText>Box office: ${(movieDetail.revenue/1000000).toFixed(2)} Millons</CardText>
                            <CardText>
                                {/* <a href={`https://www.imdb.com/title/${movieDetail.imdb_id}`} target="_blank">
                                    <FontAwesomeIcon icon={faImdb} size="2x" />
                                </a> */}
                                <a href={movieDetail.homepage} target="_blank">
                                    Official Website
                                </a>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card className="col-lg-6 mx-auto my-2">
                        <CardBody>
                            <CardTitle tag="h2">Summary</CardTitle>
                            <CardText>{movieDetail.overview}</CardText>
                        </CardBody>
                    </Card>

                </Row>
            </Card>
        </>
    );

}

export default DetailCard;