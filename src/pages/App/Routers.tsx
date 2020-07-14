import React from 'react'
import { IonRouterOutlet } from '@ionic/react'
import { Route, RouteComponentProps, Redirect } from 'react-router'
import { selectIsLogged } from './selectors'
import { History } from 'history'

import HomePage from 'pages/Home/Loadable'
import ProfilePage from 'pages/Profile/Loadable'
import LoginPage from 'pages/Login/Loadable'
import RegisterPage from 'pages/Register/Loadable'
import NewsPage, { NewsDetailPage } from 'pages/News/Loadable'
import { useSelector } from 'react-redux'
import CampaignPage from 'pages/Campaign/Loadable'
import CampaignDetailPage from 'pages/CampaignDetail/Loadable'
import CampaignCreatePage from 'pages/CampaignCreate/Loadable'

interface Props extends RouteComponentProps {}

const RedirectUrl = (location: string, history: History) => {
  return class extends React.Component {
    constructor (props) {
      super(props)
      history.push(location)
    }
    render () {
      return null
    }
  }
}

export const Routers: React.FC<Props> = ({ history }) => {
  const isLogged = useSelector(selectIsLogged)

  const LIST_PATH_FOR_USER = ['/profile', '/campaign', '/home', '/news']
  const LIST_PATH_FOR_GUEST = ['/register', '/login']

  const routeOnlyUser = React.useCallback(
    comp => {
      return !isLogged &&
        !!LIST_PATH_FOR_USER.filter(item =>
          history.location.pathname.includes(item)
        ).length
        ? RedirectUrl('/login', history)
        : comp
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogged]
  )

  const routeOnlyGuest = React.useCallback(
    comp => {
      return isLogged &&
        !!LIST_PATH_FOR_GUEST.filter(item =>
          history.location.pathname.includes(item)
        ).length
        ? RedirectUrl('/home', history)
        : comp
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogged]
  )

  return (
    <IonRouterOutlet animated={false}>
      <Route path='/home' exact component={routeOnlyUser(HomePage)} />
      <Route path='/news' exact component={routeOnlyUser(NewsPage)} />
      <Route path='/news/:id' component={routeOnlyUser(NewsDetailPage)} />
      <Route path='/campaign' exact component={routeOnlyUser(CampaignPage)} />
      <Route
        path='/campaign/create'
        exact
        component={routeOnlyUser(CampaignCreatePage)}
      />
      <Route
        path='/campaign/:id'
        component={routeOnlyUser(CampaignDetailPage)}
      />
      <Route path='/profile' exact component={routeOnlyUser(ProfilePage)} />
      <Route path='/login' exact component={routeOnlyGuest(LoginPage)} />
      <Route path='/register' exact component={routeOnlyGuest(RegisterPage)} />
      <Redirect exact from='/' to='/home' />
    </IonRouterOutlet>
  )
}
