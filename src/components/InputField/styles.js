import styled from 'styled-components';
import theme from '../../pages/styles/theme';

export const Container = styled.label`
  input {
    width: 100%;

    border-radius: 0.8rem;
    border: 1px solid #c5c6ca;

    padding: 1.3rem 1.6rem;

    background: #fff;

    font-size: ${({ theme }) => theme.FONT.BODY_M};

    &:placeholder-shown {
      color: #999;
    }
  }
`;
