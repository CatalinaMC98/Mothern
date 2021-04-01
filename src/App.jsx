import Home from "./Home/Home";
import Inicial from "./Inicial/Inicial";
import Login from "./Login/Login";
import Register from "./Register/Register";
import RegisterForm from "./RegisterForm/RegisterForm";
import { Switch, Route, withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import esLocale from "date-fns/locale/es";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
function App() {
  const renderRoutes = () => {
    const loggedin = true;
    if (loggedin) {
      return (
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Home />} />
          <Route path="/register" render={() => <Home />} />
          <Route path="/registerform" render={() => <RegisterForm />} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" render={() => <Inicial />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />

          <Route path="*" exact component={NotFound} />
        </Switch>
      );
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <div className="App">
        <h1 className="wdn-text-hidden">Mothern</h1>
        <div className="appContainer">{renderRoutes()}</div>
      </div>
    </MuiPickersUtilsProvider>
  );
}

function NotFound() {
  return <div>Not Found</div>;
}

export default withRouter(App);
