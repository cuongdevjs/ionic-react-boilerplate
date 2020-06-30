import React from "react";
import ReactDOM from "react-dom";
import { App } from "pages/App";
import * as serviceWorker from "./serviceWorker";
import { configureAppStore } from "store/configStore";
import { Provider } from "react-redux";
import "./utils/axios";
export const store = configureAppStore();

interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <Component />
  </Provider>
);

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

const render = (Component: typeof App) =>
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./pages/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require("./pages/App").App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
