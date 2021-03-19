import React from "react";
import wishlistContext from "./wishlistContext";

class WishlistState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlist: [],
            wishlistIndex: []
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.check = this.check.bind(this);
    }

    add(movie) {
        let currentList = this.state.wishlist;
        let currentListIndex = this.state.wishlistIndex;
        currentList.push(movie);
        currentListIndex.push(movie.id);
        this.setState({
            wishlist: currentList,
            wishlistIndex: currentListIndex,
        });
    }

    remove(id) {
        let currentList = this.state.wishlist;
        let currentListIndex = this.state.wishlistIndex; 
        for (let i in currentList) {
            if (currentList[i].id == id) {
                currentList.splice(i, 1);
                currentListIndex.splice(i, 1);
            }
        }
        this.setState({
            wishlist: currentList,
            wishlistIndex: currentListIndex,
        });
    }

    check(id) {
        let currentListIndex = this.state.wishlistIndex;
        let a = currentListIndex.indexOf(id);
        if (a == -1) {
            return false
        }
        else {
            return true
        }
    }

    render() {
        return(
            <wishlistContext.Provider
                value={{
                    wishlist: this.state.wishlist,
                    add: (movie) => this.add(movie),
                    remove: (id) => this.remove(id),
                    check: (id) => this.check(id),
                }}
            >
                {this.props.children}
            </wishlistContext.Provider>
        );
    }
}

export default WishlistState;