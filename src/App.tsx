import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginPage from "./pages/Login";
import { Route, Redirect } from "react-router";
import MainApp from "./pages/App/Loadable";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={LoginPage} exact={true} />
        <Route
          path="/home"
          render={(props) => {
            const isAuthed = !localStorage.getItem("token");
            return isAuthed ? <MainApp {...props} /> : <LoginPage />;
          }}
        />
        <Route
          path="/"
          render={() => {
            const isAuthed = !localStorage.getItem("token");
            return <Redirect to={isAuthed ? "/home" : "/login"} />;
          }}
          exact
        />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
