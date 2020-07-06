import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { Route, RouteComponentProps, Redirect } from "react-router";
// import { useRouter } from "./useRouter";

import HomePage from "pages/Home/Loadable";
import ProfilePage from "pages/Profile/Loadable";
import LoginPage from "pages/Login/Loadable";
import RegisterPage from "pages/Register/Loadable";
import NewsPage from "pages/News/Loadable";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./selectors";

interface Props extends RouteComponentProps {}

const RedirectUrl = (location: string, history: any) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      history.push(location);
    }
    render() {
      return null;
    }
  };
};

export const Routers: React.FC<Props> = ({ history }) => {
  const isLogged = useSelector(selectIsLogged);

  const LIST_PATH_FOR_USER = ["/profile"];
  const LIST_PATH_FOR_GUEST = ["/register", "/login"];

  const routeOnlyUser = React.useCallback(
    (comp) => {
      return !isLogged &&
        !!LIST_PATH_FOR_USER.filter(
          (item) => item === history.location.pathname
        ).length
        ? RedirectUrl("/login", history)
        : comp;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogged]
  );

  const routeOnlyGuest = React.useCallback(
    (comp) => {
      return isLogged &&
        !!LIST_PATH_FOR_GUEST.filter(
          (item) => item === history.location.pathname
        ).length
        ? RedirectUrl("/home", history)
        : comp;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogged]
  );

  return (
    <IonRouterOutlet animated={false}>
      <Route path="/home" exact component={HomePage} />
      <Route path="/news" exact component={NewsPage} />
      <Route path="/profile" exact component={routeOnlyUser(ProfilePage)} />
      <Route path="/login" exact component={routeOnlyGuest(LoginPage)} />
      <Route path="/register" exact component={routeOnlyGuest(RegisterPage)} />
      <Redirect exact from="/" to="/home" />
      {/* <Route path="*" render={() => <Redirect exact to="/home" />} /> */}
    </IonRouterOutlet>
  );
};
