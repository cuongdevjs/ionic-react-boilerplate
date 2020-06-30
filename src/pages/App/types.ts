export interface I_InfoMySelf {
  avatar?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  address?: string;
}

export interface PayloadToast {
  messageToast: string;
  colorToast?: string;
  headerToast?: string;
  durationToast?: number;
  positionToast?: "bottom" | "middle" | "top";
  translucentToast?: boolean;
}

export interface AppState {
  loading: boolean;
  isLogged: boolean;
  isShowToast: boolean;
  messageToast: string;
  headerToast?: string;
  colorToast: string;
  durationToast: number;
  positionToast: "bottom" | "middle" | "top";
  translucentToast?: boolean;
  infoMySelf: I_InfoMySelf;
}

export type ContainerState = AppState;
