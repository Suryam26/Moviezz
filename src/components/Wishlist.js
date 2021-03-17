import React from "react";
import Display from "./Display";

class WishList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Display
                    movies={this.props.list}
                    message="Your Wishlist"
                />
            </>
        );
    }
}

export default WishList;