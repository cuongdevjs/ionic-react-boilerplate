import React from 'react';
import { ProfileContentGroupItem } from '../styled';
import TitleOfSegment from 'components/TitleOfSegment/Loadable';
import { IonCard, IonCardContent, IonItem, IonLabel, IonText, IonInput } from '@ionic/react';
import { I_InfoMySelf } from 'pages/App/types';


interface Props {
  infoMySelf: I_InfoMySelf
}

export const SegmentInfoDisplay = React.memo(({ infoMySelf }: Props) => {
  return (
    <ProfileContentGroupItem>
      <TitleOfSegment title="Thông tin cơ bản" />
      <IonCard>
        <IonCardContent>
          <IonItem lines="none">
            <IonLabel position="stacked">
              Username <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              disabled
              required
              value={infoMySelf?.username || ""}
              type="text"
            />
          </IonItem>
          <IonItem lines="none">
            <IonLabel position="stacked">
              Email <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              disabled
              required
              value={infoMySelf?.email || ""}
              type="text"
            />
          </IonItem>
        </IonCardContent>
      </IonCard>
    </ProfileContentGroupItem>
  )
})