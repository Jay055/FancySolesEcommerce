import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import About from "./components/About/About";
import BackDrop from "./components/Backdrop/Backdrop";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default/Default";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navigation/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";

import './App.css'

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    return (

      
      <div className="App">
        <div className="ContainerApp">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
          />
          {this.state.sideDrawerOpen ? (
            <BackDrop click={this.backdropClickHandler} />
          ) : null}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={ProductList} />
            <Route path="/details" component={Details} />
            {/* <Route path="/About" component={About} /> */}
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </div>
      </div>

      
    );
  }
}

export default App;
