import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #444;
  padding: 15px 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
    border-radius: 4px;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/education">Education</NavLink></NavItem>
        <NavItem><NavLink to="/employment">Employment</NavLink></NavItem>
        <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
        <NavItem><NavLink to="/achievements">Achievements</NavLink></NavItem>
        <NavItem><NavLink to="/references">References</NavLink></NavItem>
        <NavItem><NavLink to="/documents">Documents</NavLink></NavItem>
        <NavItem><NavLink to="/credits">Credits</NavLink></NavItem>
      </NavList>
    </NavContainer>
  );
}
