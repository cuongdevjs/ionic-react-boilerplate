import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    /* font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    /* font-family:'Lato', -apple-system, sans-serif; */
    font-family: 'Inter', sans-serif !important;
    font-size: 14px;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }
  p,
  label {
    /* font-family: Georgia, Times, 'Times New Roman', serif; */
    font-family: inherit;
    line-height: 1.5em;
  }
  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  .cursorPointer {
    cursor: pointer !important;
  }
  ion-picker {
    --ion-color-primary: #414141;
    .picker-opt {
      font-size: 18px;
    }
  }
  ion-card, ion-item, ion-menu {
    --ion-item-background: #fff;
    --background: #fff;
  }
  ion-header {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.05);
  }
`;

export const Flex = css`
  display: flex;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

export const FlexRowCenter = css`
  ${Flex};
  justify-content: center;
  align-items: center;
`;

export const FlexRowStart = css`
  ${Flex};
  justify-content: flex-start;
  align-items: center;
`;

export const FlexRowEnd = css`
  ${Flex};
  justify-content: flex-end;
  align-items: center;
`;

export const FlexRowBetween = css`
  ${Flex}
  justify-content: space-between;
  align-items: center;
`;

export const FlexColCenter = css`
  ${FlexCol};
  ${FlexRowCenter}
`;

export const FlexColStart = css`
  ${FlexCol};
  justify-content: center;
  align-items: flex-start;
`;

export const FlexColEnd = css`
  ${FlexCol};
  justify-content: center;
  align-items: flex-end;
`;

export const FlexColBetween = css`
  ${Flex}
  justify-content: center;
  align-items: baseline;
`;

export const BackgroundCover = css<{ bgUrl: string | null | undefined }>`
  background-image: url(${(props) => props.bgUrl && props.bgUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BackgroundContain = css`
  ${BackgroundCover};
  background-size: contain;
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexRowCenter};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`;
