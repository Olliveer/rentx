import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.header};
`;

export { Container };
