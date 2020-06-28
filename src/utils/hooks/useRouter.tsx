import React from "react";
import { history } from "utils/history";
import { getItem } from "utils/lsStorage";
import HomePage from "pages/App/Loadable";
import LoginPage from "pages/Login/Loadable";

function redirect(location) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      history.push(location);
    }
    render() {
      return null;
    }
  };
}

export const useRouter = ({ isLogged }) => {
  const routeOnlyUser = React.useCallback(
    async (comp, isAutoRedirectToDeepLink = true) => {
      const token = await getItem("token");
      return token && isLogged ? comp : redirect("/login");
    },
    [isLogged]
  );

  const routeOnlyGuest = React.useCallback(
    async (comp) => {
      const token = await getItem("token");
      return !token && !isLogged ? comp : redirect("/");
    },
    [isLogged]
  );

  const routes: {
    path: string;
    exact?: boolean;
    props?: any;
    Component: any;
  }[] = React.useMemo(
    () => [
      {
        path: "/",
        exact: true,
        Component: HomePage,
      },
      {
        path: "/login",
        exact: false,
        Component: LoginPage,
      },
      {
        path: "/register",
        exact: false,
        Component: LoginPage,
      },
    ],
    []
  );

  return { routes };
};
