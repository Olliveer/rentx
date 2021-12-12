import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export { Container, Title };
