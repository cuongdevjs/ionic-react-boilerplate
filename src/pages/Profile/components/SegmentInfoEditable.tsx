import React, { FormEvent } from "react";
import { ProfileContentGroupItem, ProfileContentSubmit } from "../styled";
import { TitleOfSegment } from "components/TitleOfSegment";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonInput,
  IonLabel,
  IonButton,
  IonSpinner,
  IonDatetime,
} from "@ionic/react";
import { I_InfoMySelf } from "pages/App/types";

interface Props {
  loading: boolean;
  infoMySelf: I_InfoMySelf;
  lastName?: string;
  _onChangeLastName: (e: FormEvent<HTMLIonInputElement>) => void;
  firstName?: string;
  _onChangeFirstName: (e: FormEvent<HTMLIonInputElement>) => void;
  phone: string;
  _onChangePhone: (e: FormEvent<HTMLIonInputElement>) => void;
  address: string;
  _onChangeAddress: (e: FormEvent<HTMLIonInputElement>) => void;
  birthday: string;
  _onChangeBirthday: (e: any) => void;
  _onSubmit: () => void;
}

export const SegmentInfoEditable = React.memo(
  ({
    loading,
    infoMySelf,
    lastName,
    firstName,
    phone,
    address,
    birthday,
    _onChangeFirstName,
    _onChangeAddress,
    _onChangeLastName,
    _onChangePhone,
    _onChangeBirthday,
    _onSubmit,
  }: Props) => {
    const isCannotPress = React.useMemo(() => {
      return (
        (lastName === infoMySelf.last_name &&
          firstName === infoMySelf.first_name &&
          phone === infoMySelf.phone &&
          address === infoMySelf.address &&
          birthday === infoMySelf.birthday) ||
        (!lastName && !firstName && !birthday && !phone && !address)
      );
    }, [
      address,
      birthday,
      firstName,
      infoMySelf.address,
      infoMySelf.birthday,
      infoMySelf.first_name,
      infoMySelf.last_name,
      infoMySelf.phone,
      lastName,
      phone,
    ]);

    return (
      <ProfileContentGroupItem>
        <TitleOfSegment title="Thông tin khác" />
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonLabel position="stacked">Last name</IonLabel>
              <IonInput
                onInput={_onChangeLastName}
                value={lastName}
                type="text"
              />
            </IonItem>
            <IonItem lines="none">
              <IonLabel position="stacked">First name</IonLabel>
              <IonInput
                onInput={_onChangeFirstName}
                value={firstName}
                type="text"
              />
            </IonItem>
            <IonItem lines="none">
              <IonLabel position="stacked">SĐT</IonLabel>
              <IonInput
                onInput={_onChangePhone}
                value={phone}
                type="number"
                inputmode="numeric"
              />
            </IonItem>
            <IonItem lines="none">
              <IonLabel position="stacked">Địa chỉ</IonLabel>
              <IonInput
                onInput={_onChangeAddress}
                value={address}
                type="text"
              />
            </IonItem>
            <IonItem lines="none">
              <IonLabel position="stacked">Ngày sinh</IonLabel>
              <IonDatetime
                displayFormat="DD/MM/YYYY"
                pickerFormat="DD/MM/YYYY"
                value={birthday}
                onIonChange={_onChangeBirthday}
              />
            </IonItem>
            <ProfileContentSubmit>
              <IonButton
                disabled={loading || isCannotPress}
                shape="round"
                fill="outline"
                onClick={_onSubmit}
              >
                {loading && <IonSpinner name="lines-small" />}
                Xác nhận
              </IonButton>
            </ProfileContentSubmit>
          </IonCardContent>
        </IonCard>
      </ProfileContentGroupItem>
    );
  }
);
