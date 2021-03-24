import React from 'react';
import DetailCard from './DetailCard';
import { Container } from "reactstrap";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movieDetail: null };
        this.getDetails = this.getDetails.bind(this);
    }

    componentDidMount() {
        this.getDetails(this.props.match.params.movieId);
    }

    async getDetails(id) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`);
        const data = await response.json();
        this.setState({ movieDetail: data });
    }

    render() {
        const detailCard = <DetailCard movieDetail={this.state.movieDetail} />
        const error = <h1><center>Fetching ...</center></h1>
        return (
            <Container className="my-4">
                {this.state.movieDetail ? detailCard : error}
            </Container>
        );
    }
}

export default Detail;