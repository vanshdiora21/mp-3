import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3em;
  font-weight: 700;
  letter-spacing: 1px;
  
  @media (max-width: 750px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  margin: 15px 0 0 0;
  font-size: 1.3em;
  font-weight: 300;
  opacity: 0.95;
  
  @media (max-width: 750px) {
    font-size: 1.1em;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Vansh Diora</Title>
      <Subtitle>My Online Resume</Subtitle>
    </HeaderContainer>
  );
}
