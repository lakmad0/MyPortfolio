import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const FadeInUpSection = styled.section`
  animation: 2s ${fadeInUpAnimation};
`;
