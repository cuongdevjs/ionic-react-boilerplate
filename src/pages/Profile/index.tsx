/**
 *
 * Profile
 *
 */

import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import {
  IonPage,
  IonContent,
} from "@ionic/react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, UPDATE_INFO_MY_SELF_ACTION } from "./slice";
import { profileSaga } from "./saga";

import {
  ProfileContent,
  ProfileContentGroups,
} from "./styled";
import { selectInfoMySelf } from "pages/App/selectors";
import { selectLoading } from "./selectors";

import { Header, SegmentInfoDisplay, SegmentInfoEditable, SegmentAvatar } from "./components";

interface Props extends RouteComponentProps { }

export const Profile: React.FC<Props> = memo(({ history }) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [birthday, setBirthday] = React.useState("");

  const infoMySelf = useSelector(selectInfoMySelf);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setFirstName(infoMySelf?.last_name || "");
    setLastName(infoMySelf?.first_name || "");
    setPhone(infoMySelf?.phone || "");
    setAddress(infoMySelf?.address || "");
    setBirthday(infoMySelf?.birthday || "");
  }, [infoMySelf]);

  const _onChangeLastName = React.useCallback(e => setLastName(e.target.value), []);

  const _onChangeFirstName = React.useCallback(e => setFirstName(e.target.value), []);

  const _onChangePhone = React.useCallback(e => setPhone(e.target.value), []);

  const _onChangeAddress = React.useCallback(e => setAddress(e.target.value), []);

  const _onChangeBirthday = React.useCallback(e => setBirthday(e.detail.value), []);

  const _onSubmitAvatar = React.useCallback(avatar =>
    dispatch(UPDATE_INFO_MY_SELF_ACTION({ avatar })),
  [ dispatch ]);

  const _onSubmit = React.useCallback(() => {
    dispatch(UPDATE_INFO_MY_SELF_ACTION({
      last_name: lastName,
      first_name: firstName,
      phone,
      address,
      birthday
    }))
  }, [
    address,
    birthday,
    dispatch,
    firstName,
    lastName,
    phone
  ])

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen={true} forceOverscroll={true}>
        <ProfileContent>
          <SegmentAvatar infoMySelf={infoMySelf} onSubmitAvatar={_onSubmitAvatar} />
          <ProfileContentGroups>
            <SegmentInfoDisplay infoMySelf={infoMySelf} />
            <SegmentInfoEditable
              loading={loading}
              infoMySelf={infoMySelf}
              firstName={firstName}
              lastName={lastName}
              phone={phone}
              address={address}
              birthday={birthday}
              _onChangeAddress={_onChangeAddress}
              _onChangeBirthday={_onChangeBirthday}
              _onChangeFirstName={_onChangeFirstName}
              _onChangeLastName={_onChangeLastName}
              _onChangePhone={_onChangePhone}
              _onSubmit={_onSubmit}
            />
          </ProfileContentGroups>
        </ProfileContent>
      </IonContent>
    </IonPage>
  );
});
