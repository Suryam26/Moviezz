import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/Search";
import WishList from "./components/Wishlist";
import Navigation from "./components/Navigation";
import WishlistState from "./context/wishlistState";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <WishlistState>
        <Navigation />
          <Switch>
            <Route path="/home" component={Search} />
            <Route path="/search/:query" component={Search} />
            <Route path="/wishlist" component={WishList} />
            <Redirect to="/home" /> 
          </Switch>
        </WishlistState>
      </main>
    );
  }
}

export default App;
