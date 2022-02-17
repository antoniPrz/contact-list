
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        </Switch>
        <Switch>
          <Route exact path="/contacts">
            <h1 className="">
              vista para formulario agregar contactos 
            </h1>
            <input type="text"
              className=
              "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/edit">
            <h1 className="">
              Editar contacto
            </h1>
            <input type="text"
              className=
              "rounded-md block border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

          </Route>
          <Route exact path="/">
            <h1>Lista de contactos</h1>
          </Route>
          {/* <Route render={() => <h1>Not found</h1>} /> */}
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
