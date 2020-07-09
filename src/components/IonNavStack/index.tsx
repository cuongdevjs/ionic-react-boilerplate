/**
 *
 * IonNavStack
 *
 */
import React from 'react'
import { IonNav } from '@ionic/react'

interface IonReactNavProps {
  detail: Function
  data: any
  chidlren?: React.ReactNode
}

export const IonReactNav: React.FC<IonReactNavProps> = ({
  children,
  detail,

  data
}) => {
  const navElRef = React.useRef<HTMLIonNavElement>()

  React.useEffect(() => {
    if (data && Object.keys(data).length)
      navElRef?.current?.push('nav-detail', data)
    // return () => {
    //   if (data && Object.keys(data).length) navElRef?.current?.popToRoot()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const onIonNavDidChange = React.useCallback(
    async (event: CustomEvent<void>) => {
      const navEl = event.target as HTMLIonNavElement
      navElRef.current = navEl
      const rootView = await navEl.getByIndex(0)

      if (rootView === undefined) {
        const homeEl = navEl.querySelector('#home-wrapper') as HTMLDivElement
        const detailEl = navEl.querySelector(
          '#detail-wrapper'
        ) as HTMLDivElement

        if (!homeEl || !detailEl) {
          throw new Error('Missing home or detail wrapper elements')
        }

        navEl.setRoot(homeEl)

        if (customElements.get('nav-detail') === undefined) {
          const detailNodes: ChildNode[] = []
          detailEl.childNodes.forEach(node => detailNodes.push(node))

          customElements.define(
            'nav-detail',
            class NavDetail extends HTMLElement {
              connectedCallback () {
                this.append(...detailNodes)
              }
            }
          )
        }
      }
    },
    []
  )

  return (
    <IonNav
      onIonNavWillChange={onIonNavDidChange}
      root={'home-wrapper'}
      animated
      swipeGesture
    >
      <div id='home-wrapper'>{children}</div>
      <div id='detail-wrapper' style={{ display: 'none' }}>
        {detail()}
      </div>
    </IonNav>
  )
}
