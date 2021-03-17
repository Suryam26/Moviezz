import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/Search";
import WishList from "./components/Wishlist";
import Navigation from "./components/Navigation";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wishList: [] };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(movie) {
    let currentList = this.state.wishList;
    currentList.push(movie);
    this.setState({
      wishList: currentList
    });
    console.log(this.state.wishList);
  }

  remove(id) {
    let currentList = this.state.wishList;
    for (let i in currentList) {
      if (currentList[i].id == id) {
        currentList.splice(i, 1);
      }
    }
    this.setState({
      wishList: currentList
    });
    console.log(this.state.wishList);
  }

  render() {

    const searchQuery = ({ match }) => {
      const param = match.params.query ? match.params.query : null;
      return (
        <Search
          query={param}
          add={(movie) => this.add(movie)}
          remove={(id) => this.remove(id)}
        />
      );
    };
    
    return (
      <main>
        <Navigation />
        <Switch>
          <Route path="/home" component={searchQuery} />
          <Route path="/search/:query" component={searchQuery} />
          <Route path="/wishlist" component={() => <WishList list={this.state.wishList} />} />
          <Redirect to="/home" />   
         </Switch>
      </main>
    );
  }
}

export default App;
