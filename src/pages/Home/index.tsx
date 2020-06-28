import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey } from "./slice";
import { homeSaga } from "./saga";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";

interface Props {}

export const Home: React.FC<Props & RouteComponentProps> = (
  props: Props & RouteComponentProps
) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={`/home/tab1`} component={Tab1} exact={true} />
        <Route path={`/home/tab2`} component={Tab2} exact={true} />
        <Route path={`/home/tab3`} component={Tab3} exact={true} />
        <Route
          path="/home"
          render={() => <Redirect to={`/home/tab1`} />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab={`tab1`} href={`/home/tab1`}>
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab={`tab2`} href={`/home/tab2`}>
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab={`tab3`} href={`/home/tab3`}>
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
