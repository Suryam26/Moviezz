import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/Search";
import WishList from "./components/Wishlist";
import Navigation from "./components/Navigation";
import WishlistState from "./context/wishlistState";
import './App.css';

class App extends React.Component {
  render() {
    const searchQuery = ({ match }) => {
      const param = match.params.query ? match.params.query : null;
      return <Search query={param} />;
    };
    
    return (
      <main>
        <WishlistState>
        <Navigation />
          <Switch>
            <Route path="/home" component={searchQuery} />
            <Route path="/search/:query" component={searchQuery} />
            <Route path="/wishlist" component={WishList} />
            <Redirect to="/home" /> 
          </Switch>
        </WishlistState>
      </main>
    );
  }
}

export default App;
