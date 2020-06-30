/**
 *
 * MenuSide
 *
 */
import React, { memo } from "react";

import { IonMenu, IonList } from "@ionic/react";
import { menuController } from "@ionic/core";
import { MenuSideWrapper, MenuContent } from "./styled";
import { I_InfoMySelf } from "pages/App/types";
import { Header, Footer, MenuItem } from "./components";
import { LIST_MENU_ITEM } from "./constanst";
import { useHistory } from "react-router";

interface Props {
  isLogged: boolean;
  infoMySelf: I_InfoMySelf;
  logout: () => void;
}

export const MenuSide = memo((props: Props) => {
  const history = useHistory();
  React.useEffect(() => {
    menuController.enable(true);
  }, []);

  const _onLogout = React.useCallback(() => {
    menuController.close();
    const logout = props.logout;
    logout();
    history.push("/login");
  }, [history, props.logout]);

  return (
    <MenuSideWrapper>
      <IonMenu
        side="start"
        contentId="menuMain"
        className="my-custom-menu"
        // type="overlay"
      >
        <Header isLogged={props.isLogged} infoMySelf={props.infoMySelf} />
        <MenuContent>
          {/* <IonContent id="content"> */}
          <IonList>
            {LIST_MENU_ITEM.map((item) => (
              <MenuItem
                key={item.label + item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </IonList>
          {/* </IonContent> */}
        </MenuContent>
        <Footer isLogged={props.isLogged} logout={_onLogout} />
      </IonMenu>
    </MenuSideWrapper>
  );
});
