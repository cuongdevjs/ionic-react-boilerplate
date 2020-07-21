/**
 *
 * LoginSocialGroups
 *
 */
import React, { memo } from 'react'
import { LoginSocialGroupsWrapper, BtnGroups } from './styled'
import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react'
import { logoFacebook, logoGoogle } from 'ionicons/icons'
import { Plugins } from '@capacitor/core'

interface Props {}

export const LoginSocialGroups = memo((props: Props) => {
  // const getUserInfo = async() => {
  //   const response = await fetch(`https://graph.facebook.com/${this.props.location.state.userId}?fields=id,name,gender,link,picture&type=large&access_token=${this.props.location.state.token}`);
  //   const myJson = await response.json();
  //   console.log(myJson)
  // }

  const onLoginFacebook = React.useCallback(async () => {
    const FACEBOOK_PERMISSIONS = ['public_profile', 'email']
    const result = await Plugins.FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS
    })
    if (result && result.accessToken) {
      console.log(result)
    }
  }, [])

  const onLoginGoogle = React.useCallback(async () => {
    const result = await Plugins.GoogleAuth.signIn()
    console.info('result', result)
  }, [])

  return (
    <LoginSocialGroupsWrapper>
      <IonGrid>
        <IonRow>
          <IonCol>
            <BtnGroups className='facebook'>
              <IonButton
                expand='block'
                className='btnSubmit'
                onClick={onLoginFacebook}
              >
                <IonIcon icon={logoFacebook} />
              </IonButton>
            </BtnGroups>
          </IonCol>
          <IonCol>
            <BtnGroups className='google'>
              <IonButton
                expand='block'
                className='btnSubmit'
                onClick={onLoginGoogle}
              >
                <IonIcon icon={logoGoogle} />
              </IonButton>
            </BtnGroups>
          </IonCol>
        </IonRow>
      </IonGrid>
    </LoginSocialGroupsWrapper>
  )
})
