import Calculator from './Calculator';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  margin-top: 40px;
`;

const Copyright = styled.p`
  text-align: center;
  margin: 20px 0 0 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        &copy; 2025 Vansh Diora. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}
