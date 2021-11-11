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
import EditPlant from "./js/EditPlant";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Search from "./js/Search";

export default function App() {
  return (
      <Router>
        <div>

          <ToastContainer position="top-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover/>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/myplants">
              <PlantsList />
            </Route>
            <Route exact path={"/myplants/:id"}>
              <PlantDetails/>
            </Route>
            <Route exact path={"/myplants/edit/:id/"}>
              <EditPlant/>
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/" >
              <PlantsList />
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



function Search() {
  return <h2>Search</h2>;
}



