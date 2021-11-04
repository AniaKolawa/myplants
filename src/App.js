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


export default function App() {
  return (
      <Router>
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/myplants">
              <PlantsList />
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
            <nav className="navigation container">
                <NavLink className="navLink" activeClassName="navLinkActive" to="/"><i className="fas fa-home navIcon navIcon--home"></i></NavLink>
                <NavLink className="navLink" activeClassName="navLinkActive" to="/myplants"><i className="fas fa-seedling navIcon navIcon--plants"></i></NavLink>
                <NavLink className="navLink" activeClassName="navLinkActive" to="/search"><i className="fas fa-search navIcon navIcon--search"></i></NavLink>
                <NavLink className="navLink" activeClassName="navLinkActive" to="/addplant"><i className="fas fa-plus navIcon navIcon--add"></i></NavLink>
            </nav>
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



