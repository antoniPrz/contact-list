
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
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
            <Route exact path="/edit/:id">
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
