import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.section`
  padding: 2.4rem 1.6rem;

  border-radius: 0.8rem;
  background: #fff;

  font-size: ${({ theme }) => theme.FONT.BODY_M};
`;
