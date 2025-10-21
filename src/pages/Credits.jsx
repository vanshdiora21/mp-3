import styled from 'styled-components';

const MainContent = styled.main`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #333;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  color: #444;
  margin-top: 20px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.strong`
  color: #555;
`;

const Value = styled.span`
  color: #666;
`;

const List = styled.ul`
  line-height: 1.8;
  color: #666;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
`;

export default function Credits() {
  return (
    <MainContent>
      <Section>
        <Title>Credits</Title>

        <SubTitle>Website Development</SubTitle>
        <InfoGrid>
          <Label>Developer:</Label>
          <Value>Vansh Diora</Value>
          <Label>Course:</Label>
          <Value>CS-391 Web Application Development</Value>
          <Label>Institution:</Label>
          <Value>Boston University</Value>
          <Label>Instructor:</Label>
          <Value>Taymaz Davoodi, M.Sc.</Value>
          <Label>Development Period:</Label>
          <Value>September - October 2025</Value>
        </InfoGrid>

        <SubTitle>Technologies and Standards Used</SubTitle>
        <InfoGrid>
          <Label>React:</Label>
          <Value>Component-based UI architecture</Value>
          <Label>React Router:</Label>
          <Value>Client-side routing and navigation</Value>
          <Label>Styled Components:</Label>
          <Value>CSS-in-JS styling solution</Value>
          <Label>HTML5:</Label>
          <Value>Semantic markup and accessibility standards</Value>
          <Label>JavaScript:</Label>
          <Value>Interactive functionality and hooks</Value>
          <Label>Vite:</Label>
          <Value>Build tool and development server</Value>
        </InfoGrid>

        <SubTitle>Design Methodology</SubTitle>
        <List>
          <ListItem><strong>Component Architecture:</strong> Reusable React components following single-tasking principle</ListItem>
          <ListItem><strong>Custom Hooks:</strong> DRY principle implementation for calculator logic</ListItem>
          <ListItem><strong>Responsive Design:</strong> Mobile-first approach with adaptive layouts</ListItem>
          <ListItem><strong>Accessibility:</strong> WCAG 2.1 guidelines compliance</ListItem>
          <ListItem><strong>State Management:</strong> React useState hooks for component state</ListItem>
        </List>

        <SubTitle>Educational Context</SubTitle>
        <Paragraph>
          <strong>Academic Project:</strong> Created as coursework for web development class<br />
          <strong>Learning Objectives:</strong> React, component architecture, hooks, routing, and modern web standards<br />
          <strong>Professor Guidance:</strong> Following specific methodologies taught in CS-391
        </Paragraph>

        <SubTitle>Special Acknowledgments</SubTitle>
        <List>
          <ListItem><strong>Professor Taymaz Davoodi:</strong> Web development instruction and methodology guidance</ListItem>
          <ListItem><strong>Boston University CDS:</strong> Computer Science Department for educational support</ListItem>
          <ListItem><strong>Course Teaching Assistants:</strong> Additional technical guidance and support</ListItem>
          <ListItem><strong>Fellow Students:</strong> Peer feedback and collaborative learning environment</ListItem>
        </List>

        <SubTitle>Version History</SubTitle>
        <List>
          <ListItem><strong>Version 1.0 (MP-1):</strong> Initial HTML/CSS/JavaScript implementation</ListItem>
          <ListItem><strong>Version 2.0 (MP-2):</strong> API integration with React components</ListItem>
          <ListItem><strong>Version 3.0 (MP-3):</strong> Full React conversion with routing and custom hooks</ListItem>
        </List>

        <SubTitle>Copyright and Usage Rights</SubTitle>
        <Paragraph>
          All content, code, and design elements on this website are the original work of Vansh Diora, 
          created as part of academic coursework at Boston University. This website serves as both a 
          professional portfolio and educational project demonstrating web development skills learned in CS-391.
        </Paragraph>

        <Paragraph>
          <strong>Last Updated:</strong> October 21, 2025<br />
          <strong>Version:</strong> 3.0 - React Implementation with Full Component Architecture
        </Paragraph>
      </Section>
    </MainContent>
  );
}
