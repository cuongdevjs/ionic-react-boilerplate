/* --- STATE --- */

export interface payloadUpdateInfoMySelf {
  last_name?: string;
  first_name?: string;
  phone?: string;
  address?: string;
  birthday?: string;
}

export interface ProfileState {
  loading: boolean;
  error: boolean;
  success: boolean;
}

export type ContainerState = ProfileState;
