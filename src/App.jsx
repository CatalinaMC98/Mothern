import Home from "./Home/Home";
import { Switch, Route, withRouter } from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <h1 className="wdn-text-hidden">Mothern</h1>
      <div className="appContainer">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Home />} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}

export default withRouter(App);
