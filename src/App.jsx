import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./Homepage";
import Add from "./Add&EditNote/Add/Add";
import Edit from "./Add&EditNote/Add/Edit";
import AddBill from "./Add&EditBill/AddBill";
import AddEmail from "./Add&EditEmail/AddEmail";
import EditEmail from "./Add&EditEmail/EditEmail";
// import Edit from "./pages/Edit";
// import Add from "./pages/Add";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/addEmail" component={AddEmail} />
          <Route exact path="/addBill" component={AddBill} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/editEmail/:id" component={EditEmail} />
          
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;