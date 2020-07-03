import React from "react";
import { ProfileContentAvt } from "../styled";
import { BgHeader, BgHeaderOverlay } from "pages/Login/styled";
import { IonAvatar, IonIcon } from "@ionic/react";
import { imageOutline } from "ionicons/icons";
import { I_InfoMySelf } from "pages/App/types";
import bgUrl from "assets/images/bgProfile.png";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

interface Props {
  infoMySelf: I_InfoMySelf;
  onSubmitAvatar: (url: any) => void;
}

export const SegmentAvatar = React.memo(
  ({ infoMySelf, onSubmitAvatar }: Props) => {
    const [imgUrl, setImgUrl] = React.useState<any>("");

    const takePicture = React.useCallback(async () => {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        correctOrientation: false,
        resultType: CameraResultType.DataUrl,
        saveToGallery: true,
      });
      setImgUrl(image.dataUrl);
      onSubmitAvatar(image.dataUrl);
    }, [onSubmitAvatar]);

    return (
      <ProfileContentAvt>
        <BgHeader bgUrl={bgUrl} height={"15vh"}>
          <BgHeaderOverlay />
        </BgHeader>
        <IonAvatar onClick={takePicture}>
          <img
            src={
              imgUrl ||
              infoMySelf.avatar ||
              "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
            }
            alt="avatar"
          />
          <span>
            <IonIcon icon={imageOutline} />
          </span>
        </IonAvatar>
      </ProfileContentAvt>
    );
  }
);
