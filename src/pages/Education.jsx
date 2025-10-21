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

const Institution = styled.h4`
  color: #555;
  margin: 10px 0;
`;

const List = styled.ul`
  line-height: 1.8;
  color: #666;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

export default function Education() {
  return (
    <MainContent>
      <Section>
        <Title>Education</Title>
        
        <SubTitle>Boston University</SubTitle>
        <Institution>Bachelor of Science in Computer Science and Finance</Institution>
        <p><em>Expected Graduation: May 2026</em></p>
        
        <List>
          <ListItem>Dual major in Computer Science and Finance</ListItem>
          <ListItem>Relevant Coursework: Data Structures, Algorithms, Financial Modeling, Machine Learning</ListItem>
          <ListItem>Advanced Data Structures and Machine Learning completion</ListItem>
          <ListItem>Financial & Managerial Accounting coursework</ListItem>
        </List>

        <SubTitle>Academic Focus Areas</SubTitle>
        <List>
          <ListItem><strong>Computer Science:</strong> Python programming, data analysis, algorithm design</ListItem>
          <ListItem><strong>Finance:</strong> Investment analysis, financial modeling, valuation techniques</ListItem>
          <ListItem><strong>Mathematics:</strong> Statistical analysis, quantitative methods</ListItem>
        </List>

        <SubTitle>Continuing Education</SubTitle>
        <p>
          Currently preparing for CFA Level 1 certification to enhance financial analysis skills and 
          professional credentials in investment management.
        </p>

        <SubTitle>Academic Projects</SubTitle>
        <List>
          <ListItem>Machine Learning applications in trading systems</ListItem>
          <ListItem>Financial valuation models and DCF analysis</ListItem>
          <ListItem>Data structures implementation and optimization</ListItem>
        </List>
      </Section>
    </MainContent>
  );
}
