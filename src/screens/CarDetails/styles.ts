import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { Container, Header };
