import React from "react";
import wishlistContext from "./wishlistContext";

class WishlistState extends React.Component {
    constructor(props) {
        super(props);
        this.state = { wishlist: [] };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(movie) {
        let currentList = this.state.wishlist;
        currentList.push(movie);
        this.setState({
            wishlist: currentList
        });
        console.log(this.state.wishlist);
    }

    remove(id) {
        let currentList = this.state.wishlist;
        for (let i in currentList) {
            if (currentList[i].id == id) {
                currentList.splice(i, 1);
            }
        }
        this.setState({
            wishlist: currentList
        });
        console.log(this.state.wishlist);
    }

    render() {
        return(
            <wishlistContext.Provider
                value={{
                    wishlist: this.state.wishlist,
                    add: (movie) => this.add(movie),
                    remove: (id) => this.remove(id),
                }}
            >
                {this.props.children}
            </wishlistContext.Provider>
        );
    }
}

export default WishlistState;