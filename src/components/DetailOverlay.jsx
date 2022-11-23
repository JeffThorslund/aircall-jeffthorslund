import styled from "styled-components";

export const DetailOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-color: bisque;
`;

export const DetailOverlay = () => {
  return <DetailOverlayWrapper>hi</DetailOverlayWrapper>;
};
