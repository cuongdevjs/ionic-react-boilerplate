/* --- STATE --- */

export interface payloadRequestRegister {
  user: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterState {
  loading: boolean;
  error: boolean;
  success: boolean;
}

export type ContainerState = RegisterState;
