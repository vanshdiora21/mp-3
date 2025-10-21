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

const JobTitle = styled.h4`
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

export default function Employment() {
  return (
    <MainContent>
      <Section>
        <Title>Employment</Title>

        <SubTitle>Caprae Capital Partners</SubTitle>
        <JobTitle>Private Equity Intern</JobTitle>
        <p><em>Summer 2024</em></p>
        <List>
          <ListItem>Conducted comprehensive financial analysis and due diligence on potential investment opportunities in various industry sectors</ListItem>
          <ListItem>Developed detailed financial models and performed valuation analyses using DCF, comparable company analysis, and precedent transactions</ListItem>
          <ListItem>Assisted with portfolio company monitoring, performance tracking, and quarterly reporting processes</ListItem>
          <ListItem>Prepared investment memorandums, executive summaries, and presentations for senior management review</ListItem>
          <ListItem>Supported deal sourcing activities and maintained relationships with investment banking contacts</ListItem>
        </List>

        <SubTitle>Boston University</SubTitle>
        <JobTitle>Teaching Assistant - Business Analyst Class</JobTitle>
        <p><em>Scheduled/Upcoming</em></p>
        <List>
          <ListItem>Assist students with business analysis concepts, methodologies, and practical applications</ListItem>
          <ListItem>Grade assignments, projects, and examinations with detailed feedback</ListItem>
          <ListItem>Lead review sessions, study groups, and office hours for student support</ListItem>
          <ListItem>Collaborate with professors on curriculum development and course improvement</ListItem>
        </List>

        <SubTitle>Key Professional Skills Developed</SubTitle>
        <List>
          <ListItem><strong>Financial Analysis:</strong> DCF modeling, valuation techniques, ratio analysis</ListItem>
          <ListItem><strong>Due Diligence:</strong> Market research, competitive analysis, risk assessment</ListItem>
          <ListItem><strong>Communication:</strong> Professional presentations, written reports, client interaction</ListItem>
          <ListItem><strong>Technical Skills:</strong> Advanced Excel, Python, financial databases</ListItem>
        </List>

        <SubTitle>Career Objectives</SubTitle>
        <p>
          Actively seeking entry-level investment analyst positions where I can apply my dual expertise in 
          computer science and finance to contribute to investment decision-making and portfolio management.
        </p>
      </Section>
    </MainContent>
  );
}
