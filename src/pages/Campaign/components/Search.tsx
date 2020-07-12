import React, { memo } from 'react';
import { CampaignSearch } from '../styled';
import { IonSearchbar } from '@ionic/react';


interface Props {
  valueSearch: string;
  onChangeValueSearch: (e: CustomEvent<any>) => void;
}


export const Search = memo(({ valueSearch, onChangeValueSearch }: Props) => {
  return (
    <CampaignSearch>
      <IonSearchbar value={valueSearch} onIonChange={onChangeValueSearch} />
    </CampaignSearch>
  )
})