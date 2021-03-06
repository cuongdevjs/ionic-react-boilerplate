/**
 *
 * MenuSide
 *
 */
import React, { memo } from 'react'

import { IonMenu, IonList } from '@ionic/react'
import { menuController } from '@ionic/core'
import { MenuSideWrapper, MenuContent } from './styled'
import { I_InfoMySelf } from 'pages/App/types'
import { Header, Footer, MenuItem } from './components'
import { LIST_MENU_ITEM } from './constanst'
import { useHistory } from 'react-router'
import { Plugins } from '@capacitor/core'

interface Props {
  isLogged: boolean
  infoMySelf: I_InfoMySelf
  logout: () => void
}

export const MenuSide = memo((props: Props) => {
  const history = useHistory()

  const _onNavigation = React.useCallback(
    (url: string) => {
      menuController.close()
      history.push(url)
    },
    [history]
  )

  const _onLogout = React.useCallback(async () => {
    const logout = props.logout
    logout()
    await Plugins.FacebookLogin.logout()
    await Plugins.GoogleAuth.signOut()
    _onNavigation('/login')
  }, [_onNavigation, props.logout])

  React.useEffect(() => {
    menuController.enable(true)
    _onNavigation('/')
  }, [_onNavigation])

  return (
    <MenuSideWrapper>
      <IonMenu
        side='start'
        contentId='menuMain'
        className='my-custom-menu'
        // type="overlay"
      >
        <Header
          isLogged={props.isLogged}
          infoMySelf={props.infoMySelf}
          onToProfilePage={() => _onNavigation('/profile')}
          onToLoginPage={() => _onNavigation('/login')}
        />
        <MenuContent>
          {/* <IonContent id="content"> */}
          <IonList>
            {LIST_MENU_ITEM.map(item => (
              <MenuItem
                key={item.label + item.href}
                label={item.label}
                icon={item.icon}
                onClick={() => _onNavigation(item.href)}
              />
            ))}
          </IonList>
          {/* </IonContent> */}
        </MenuContent>
        <Footer isLogged={props.isLogged} logout={_onLogout} />
      </IonMenu>
    </MenuSideWrapper>
  )
})
