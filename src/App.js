import './App.css';
import CreateRoom from './components/CreateRoom';
import GuessWord from './components/GuessWord';


import { Route, Switch, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/game/:roomId">
            <GuessWord />
          </Route>
          <Route path="/">
            <CreateRoom />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
