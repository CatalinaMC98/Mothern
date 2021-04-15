import Home from "./Home/Home";
import Inicial from "./Inicial/Inicial";
import Login from "./Login/Login";
import Register from "./Register/Register";
import RegisterForm from "./RegisterForm/RegisterForm";
import MiCuerpo from "./MiCuerpo/MiCuerpo";
import Nutricion from "./Nutricion/Nutricion";
import Agenda from "./Agenda/Agenda";
import { Switch, Route, withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import esLocale from "date-fns/locale/es";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

import { useUser, useFirestore } from "reactfire";

function App(props) {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const [userData, setUserData] = useState(null);

  const renderRoutes = () => {
    const loggedin = user !== null && user !== undefined;
    if (loggedin) {
      if (userData === null) {
        firestore
          .collection("userinfo")
          .doc(user?.uid)
          .get()
          .then((response) => {
            setUserData(response.data());
          })
          .catch((err) => {
            console.error(err);
          });
        return <div></div>;
      }
      // console.log("user data");
      // console.log(userData);
      if (
        !userData?.registerForm &&
        props.location.pathname !== "/registerform"
      ) {
        props.history.push("/registerform");
      }

      return (
        <Switch>
          <Route exact path="/" render={() => <Home userInfo={userData} />} />
          <Route path="/login" render={() => <Home userInfo={userData} />} />
          <Route path="/register" render={() => <Home userInfo={userData} />} />
          <Route
            path="/registerform"
            render={() => <RegisterForm userInfo={userData} />}
          />
          <Route
            path="/micuerpo"
            render={() => <MiCuerpo userInfo={userData} />}
          />
          <Route
            path="/nutricion"
            render={() => <Nutricion userInfo={userData} />}
          />
          <Route path="/agenda" render={() => <Agenda userInfo={userData} />} />
          <Route path="*" exact render={() => <Home userInfo={userData} />} />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" render={() => <Inicial />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="*" exact component={Inicial} />
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
export default withRouter(App);
