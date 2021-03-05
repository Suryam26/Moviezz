import React from "react";
import Display from "./Display";

class WishList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Display movies={this.props.list} add={(movie) => this.props.add(movie)} remove={(id) => this.props.remove(id)} />
            </>
        );
    }
}

export default WishList;