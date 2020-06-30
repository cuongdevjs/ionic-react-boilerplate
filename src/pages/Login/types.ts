/* --- STATE --- */

export interface payloadRequestLogin {
  username: string;
  password: string;
}

export interface LoginState {
  error: boolean;
  success: boolean;
  loading: boolean;
}

export type ContainerState = LoginState;