import Home from "./Home/Home";
import Inicial from "./Inicial/Inicial";
import Login from "./Login/Login";
import Register from "./Register/Register";
import RegisterForm from "./RegisterForm/RegisterForm";
import { Switch, Route, withRouter } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import esLocale from "date-fns/locale/es";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import { useState } from "react";

import { useUser, useAuth, useFirestore} from "reactfire";


function App(props) {

  const { data: user } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const [userData, setUserData] = useState(null);

  const renderRoutes = () => {
  
    /*auth.signOut();
    console.log(user);*/  

    const loggedin = user !== null && user !== undefined;


    if (loggedin) {
      if(userData === null){
        firestore.collection('userinfo').doc(user?.uid).get().then((response) => {
          setUserData(response.data())
        }).catch((err) => {
          console.log(err);
        });
        return (<div></div>)
      }
      console.log('user data')
      console.log(userData)
      if(!userData?.registerForm && props.location.pathname !== '/registerform'){
        props.history.push("/registerform");
      }
      else if(userData?.registerForm && props.location.pathname !== '/' && props.location.pathname !== '/registerform'){
        props.history.push("/");
      }

      return (
          <Switch>
            <Route exact path="/" render={() => <Home userInfo={userData}/>} />
            <Route path="/login" render={() => <Home userInfo={userData}/>} />
            <Route path="/register" render={() => <Home userInfo={userData}/>} />
            <Route path="/registerform" render={() => <RegisterForm userInfo={userData}/>} />
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
