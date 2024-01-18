import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-inline: auto;

  border-radius: 0.8rem;
  border: 1px solid #2e7bb4;

  padding-block: 1.3rem;

  background: #2e7bb4;

  color: #fff;
  font-size: ${({ theme }) => theme.FONT.BODY_M};
  font-weight: 700;
`;
