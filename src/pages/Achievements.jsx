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

const List = styled.ul`
  line-height: 1.8;
  color: #666;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

export default function Achievements() {
  return (
    <MainContent>
      <Section>
        <Title>Achievements</Title>

        <SubTitle>Academic Excellence</SubTitle>
        <List>
          <ListItem>Dean's List recognition at Boston University for academic performance</ListItem>
          <ListItem>Successfully managing dual major in Computer Science and Finance</ListItem>
          <ListItem>Completed advanced coursework in Financial & Managerial Accounting</ListItem>
          <ListItem>Advanced Data Structures and Machine Learning course completion</ListItem>
          <ListItem>Consistent high performance in quantitative and analytical coursework</ListItem>
        </List>

        <SubTitle>Professional Development</SubTitle>
        <List>
          <ListItem><strong>CFA Level 1 Preparation:</strong> Currently preparing for professional certification in investment analysis</ListItem>
          <ListItem><strong>Private Equity Experience:</strong> Successfully completed internship at Caprae Capital Partners</ListItem>
          <ListItem><strong>Teaching Assistant Role:</strong> Selected for business analyst class TA position</ListItem>
          <ListItem><strong>Industry Research:</strong> Extensive company analysis and investment research experience</ListItem>
        </List>

        <SubTitle>Technical Proficiency</SubTitle>
        <List>
          <ListItem><strong>Programming Languages:</strong> Advanced Python, JavaScript, HTML/CSS</ListItem>
          <ListItem><strong>Data Analysis:</strong> Pandas, NumPy, Plotly, advanced Excel functions</ListItem>
          <ListItem><strong>Financial Modeling:</strong> DCF analysis, valuation techniques, sensitivity analysis</ListItem>
          <ListItem><strong>Machine Learning:</strong> Trading algorithms, predictive modeling, Monte Carlo simulation</ListItem>
          <ListItem><strong>Development Tools:</strong> Git version control, GitHub project management</ListItem>
        </List>

        <SubTitle>Project Accomplishments</SubTitle>
        <List>
          <ListItem>Developed institutional-quality financial valuation models</ListItem>
          <ListItem>Created automated data processing solutions for complex Excel workflows</ListItem>
          <ListItem>Implemented machine learning trading systems with backtesting capabilities</ListItem>
          <ListItem>Built comprehensive analytics tools for sports and fantasy applications</ListItem>
        </List>

        <SubTitle>Leadership and Initiative</SubTitle>
        <List>
          <ListItem>Proactive career preparation with extensive job application and networking activities</ListItem>
          <ListItem>Continuous learning approach to emerging technologies and finance trends</ListItem>
          <ListItem>Mentoring and knowledge sharing through teaching assistant roles</ListItem>
          <ListItem>Self-directed project development demonstrating entrepreneurial mindset</ListItem>
        </List>
      </Section>
    </MainContent>
  );
}
