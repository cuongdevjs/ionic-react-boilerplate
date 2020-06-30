import React from "react";
import { IonApp, IonRouterOutlet, IonToast } from "@ionic/react";
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
import "antd-mobile/dist/antd-mobile.css";
import { GlobalStyle } from "../../global/styted";

import { Route, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLogged,
  selectIsShowToast,
  selectMessageToast,
  selectDurationToast,
  selectColorToast,
  selectHeaderToast,
  selectTranslucentToast,
  selectPositionToast,
  selectInfoMySelf,
} from "./selectors";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { sliceKey, reducer, actions, GET_INFO_MYSELF } from "./slice";
import { appSaga } from "./saga";
//
import HomePage from "pages/Home/Loadable";
import LoginPage from "pages/Login/Loadable";
import RegisterPage from "pages/Register/Loadable";
import MenuSide from "components/MenuSide/Loadable";
import { getItem } from "utils/lsStorage";

interface Props {}

export const App = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: appSaga });
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);
  const isShowToast = useSelector(selectIsShowToast);
  const messageToast = useSelector(selectMessageToast);
  const durationToast = useSelector(selectDurationToast);
  const colorToast = useSelector(selectColorToast);
  const headerToast = useSelector(selectHeaderToast);
  const translucentToast = useSelector(selectTranslucentToast);
  const positionToast = useSelector(selectPositionToast);
  const infoMySelf = useSelector(selectInfoMySelf);

  const checkLogged = React.useCallback(async () => {
    const token = await getItem("yoolove-token");
    dispatch(actions.changeIsLogged({ stateLogged: !!token }));
  }, [dispatch]);

  React.useEffect(() => {
    checkLogged();
  }, [checkLogged]);

  React.useEffect(() => {
    if (isLogged) dispatch(GET_INFO_MYSELF());
  }, [dispatch, isLogged]);

  const _onLogout = React.useCallback(() => {
    dispatch(actions.logout());
  }, [dispatch]);

  return (
    <IonApp>
      <IonReactRouter>
        <MenuSide
          isLogged={isLogged}
          infoMySelf={infoMySelf}
          logout={_onLogout}
        />
        <IonRouterOutlet animated={false} id="menuMain">
          <Route
            path="/home"
            render={(props) => {
              return isLogged ? <HomePage {...props} /> : <LoginPage />;
            }}
          />
          <Route
            path="/login"
            exact
            render={(props) => {
              return !isLogged ? <LoginPage {...props} /> : <HomePage />;
            }}
          />
          <Route
            path="/register"
            exact
            render={(props) => {
              return !isLogged ? <RegisterPage {...props} /> : <HomePage />;
            }}
          />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
      <GlobalStyle />
      <IonToast
        isOpen={isShowToast}
        onDidDismiss={() => dispatch(actions.hiddenToast())}
        message={messageToast}
        duration={durationToast}
        header={headerToast}
        color={colorToast}
        position={positionToast}
        translucent={translucentToast}
        buttons={
          durationToast === 0
            ? [
                {
                  text: "OK",
                  role: "cancel",
                  handler: () => {},
                },
              ]
            : []
        }
      />
    </IonApp>
  );
};
