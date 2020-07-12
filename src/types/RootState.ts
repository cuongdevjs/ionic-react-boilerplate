import { AppState } from "pages/App/types";
import { HomeState } from 'pages/Home/types';
import { LoginState } from 'pages/Login/types';
import { RegisterState } from 'pages/Register/types';
import { ProfileState } from 'pages/Profile/types';
import { NewsState } from 'pages/News/types';
import { CampaignState } from 'pages/Campaign/types';
import { CampaignDetailState } from 'pages/CampaignDetail/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly
/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  app?: AppState;
  home?: HomeState;
  login?: LoginState;
  register?: RegisterState;
  profile?: ProfileState;
  news?: NewsState;
  campaign?: CampaignState;
  campaignDetail?: CampaignDetailState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
