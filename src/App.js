import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/Search";
import WishList from "./components/Wishlist";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Search} exact />
          <Route path="/wishlist" component={WishList} />
          <Redirect to="/" />
         </Switch>
      </main>
    );
  }
}

export default App;
