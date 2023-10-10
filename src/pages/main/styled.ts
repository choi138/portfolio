import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  display: flex;
  scroll-behavior: smooth;
`;

export const MainPageSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  flex-shrink: 0;
  overflow-y: auto;
`;

export const MainPageBgSection = styled(MainPageSection)`
  background-color: #fefefe;
  align-items: center;
  justify-content: center;
`;
