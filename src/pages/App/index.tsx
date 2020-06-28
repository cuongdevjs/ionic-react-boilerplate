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
import "../../theme/variables.css";

import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./selectors";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { sliceKey, reducer } from "./slice";
import { appSaga } from "./saga";
//
import HomePage from "pages/Home/Loadable";
import LoginPage from "pages/Login/Loadable";
import { history } from "utils/history";

interface Props {}

export const App = (props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: appSaga });

  const isLogged = useSelector(selectIsLogged);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/home"
            render={(props) => {
              if (!isLogged) history.push("/login");
              console.log(isLogged)
              return <HomePage {...props} />;
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              if (isLogged) history.push("/");
              console.log(isLogged)
              return <LoginPage {...props} />;
            }}
          />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
