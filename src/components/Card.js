import React from "react";
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

class InfoCard extends React.Component {
    render() {
        return (
            <Card color="dark" className="col-3 m-3">
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button className="px-3">
                        <FontAwesomeIcon icon={faBookmark} />
                    </Button>
                </CardBody>
            </Card>            
        );
    }
}

export default InfoCard;