import React from "react";
import Display from "./Display";
import wishlistContext from "../context/wishlistContext";

class WishList extends React.Component {
    render() {
        return (
            <>
                <Display
                    movies={this.context.wishlist}
                    message="Your Wishlist"
                />
            </>
        );
    }
}

WishList.contextType = wishlistContext;
export default WishList;