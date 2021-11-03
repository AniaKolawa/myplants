import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddPlant from "./js/AddPlant";


export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/myplants">Moje rośliny</Link>
              </li>
              <li>
                <Link to="/search">Szukaj</Link>
              </li>
              <li>
                <Link to="/addplant">Dodaj roślinę</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/myplants">
              <MyPlants />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/" exact component={Home}>
              <Home />
            </Route>
            <Route path="/addplant" component={AddPlant}>
              {/*<AddPlant />*/}
            </Route>
          </Switch>
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

function MyPlants() {
  return <h2>My plants</h2>;
}

