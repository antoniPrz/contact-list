
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { AddNewContact } from "./views/AddNewContact";
import { EditContact } from "./views/EditContact";
import { Home } from "./views/Home";

import { ContactProvider } from './context/ContactProvider'




function App() {






  return (
    <>
      <ContactProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/AddNew">
              <AddNewContact />
            </Route>
            <Route exact path="/edit">
              <EditContact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </BrowserRouter>

      </ContactProvider>
    </>
  );
}

export default App;
