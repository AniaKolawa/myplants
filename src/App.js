import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import AddPlant from "./js/AddPlant";
import PlantsList from "./js/PlantsList";
import PlantDetails from "./js/PlantDetails";


export default function App() {
  return (
      <Router>
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/myplants">
              <PlantsList />
            </Route>
              <Route path={"/myplants/:id"}>
                  <PlantDetails/>
              </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/" exact component={Home}>
              <Home />
            </Route>
            <Route path="/addplant" >
              <AddPlant />
            </Route>
          </Switch>
            <div className="nav-container">
              <nav className="navigation">

                <NavLink className="navLink" activeClassName="navLinkActive" to="/myplants"><i className="fas fa-seedling navIcon navIcon--plants"></i></NavLink>
                <NavLink className="navLink" activeClassName="navLinkActive" to="/search"><i className="fas fa-search navIcon navIcon--search"></i></NavLink>
                <NavLink className="navLink" activeClassName="navLinkActive" to="/addplant"><i className="fas fa-plus navIcon navIcon--add"></i></NavLink>

              </nav>
            </div>
          <div className="separator"></div>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Search() {
  return <h2>Search</h2>;
}



