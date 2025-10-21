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

const Note = styled.p`
  color: #666;
  font-style: italic;
  background-color: #f5f5f5;
  padding: 15px;
  border-left: 4px solid #4CAF50;
  margin-top: 20px;
`;

export default function Documents() {
  return (
    <MainContent>
      <Section>
        <Title>Documents</Title>

        <SubTitle>Resume and Professional Documents</SubTitle>
        <List>
          <ListItem>Download PDF Resume - Investment Analyst Focus</ListItem>
          <ListItem>Download PDF Resume - Technology Focus</ListItem>
          <ListItem>Download Complete Curriculum Vitae</ListItem>
          <ListItem>Download One-Page Resume Summary</ListItem>
        </List>

        <SubTitle>Academic Transcripts and Records</SubTitle>
        <List>
          <ListItem>Official Boston University transcript - Available upon request</ListItem>
          <ListItem>Unofficial transcript with current coursework - Available upon request</ListItem>
          <ListItem>Course descriptions and syllabi for specialized coursework</ListItem>
          <ListItem>Academic project documentation and grades</ListItem>
        </List>

        <SubTitle>Technical Project Documentation</SubTitle>
        <List>
          <ListItem>Machine Learning Trading System - Complete Documentation</ListItem>
          <ListItem>Sweetgreen Valuation Model - Analysis Report</ListItem>
          <ListItem>Excel Automation Projects - Implementation Guide</ListItem>
          <ListItem>Python Data Analysis - Code Samples and Results</ListItem>
        </List>

        <SubTitle>Professional Certifications and Training</SubTitle>
        <List>
          <ListItem>Python Programming Proficiency Certificate</ListItem>
          <ListItem>Advanced Financial Modeling Certificate</ListItem>
          <ListItem>Data Analysis and Visualization Certificate</ListItem>
          <ListItem>CFA Level 1 Registration Confirmation - Available upon request</ListItem>
        </List>

        <SubTitle>Code Repositories and Technical Samples</SubTitle>
        <List>
          <ListItem>Download GitHub Portfolio Archive</ListItem>
          <ListItem>Python Projects Collection (ZIP)</ListItem>
          <ListItem>Excel Financial Models Collection (ZIP)</ListItem>
          <ListItem>Web Development Projects (ZIP)</ListItem>
        </List>

        <SubTitle>Cover Letters and Application Materials</SubTitle>
        <List>
          <ListItem>Investment Analyst Position - Cover Letter</ListItem>
          <ListItem>Business Analyst Position - Cover Letter</ListItem>
          <ListItem>Data Analyst Position - Cover Letter</ListItem>
          <ListItem>Software Developer Position - Cover Letter</ListItem>
        </List>

        <SubTitle>Research and Analysis Reports</SubTitle>
        <List>
          <ListItem>Industry Analysis and Market Research Reports</ListItem>
          <ListItem>Investment Analysis Case Studies</ListItem>
          <ListItem>Technical Writing and Documentation Samples</ListItem>
        </List>

        <Note>
          <strong>Access and Privacy:</strong> Some documents may require permission to access due to 
          confidentiality agreements or proprietary content. Please contact me directly for access to 
          sensitive materials or additional documentation not listed here.
        </Note>

        <Note>
          <strong>Format Availability:</strong> Most documents are available in multiple formats (PDF, 
          Word, Excel) upon request. Please specify your preferred format when requesting access.
        </Note>
      </Section>
    </MainContent>
  );
}
