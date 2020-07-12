import React, { memo } from 'react'
import { IonButton } from '@ionic/react'
import { CampaignDetailMainParagraph } from '../styled'

interface Props {
  text?: string
}

export const CampaignParagraph = memo(({ text }: Props) => {
  const [collapseParagraph, setCollapseParagraph] = React.useState(true)

  return (
    <CampaignDetailMainParagraph isCollapse={collapseParagraph}>
      <div className='text' dangerouslySetInnerHTML={{ __html: text || '' }} />
      <div className='action'>
        <IonButton onClick={() => setCollapseParagraph(!collapseParagraph)}>
          {collapseParagraph ? 'Xem thêm' : 'Thu gọn'}
        </IonButton>
      </div>
    </CampaignDetailMainParagraph>
  )
})
