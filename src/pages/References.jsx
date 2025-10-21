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

const Paragraph = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
`;

const Note = styled.p`
  color: #666;
  font-style: italic;
  background-color: #f5f5f5;
  padding: 15px;
  border-left: 4px solid #4CAF50;
  margin-top: 20px;
`;

export default function References() {
  return (
    <MainContent>
      <Section>
        <Title>References</Title>

        <SubTitle>Professional References</SubTitle>
        <Paragraph>
          References from Caprae Capital Partners and other professional experiences are available 
          upon request during the interview process.
        </Paragraph>

        <SubTitle>Academic References</SubTitle>
        <Paragraph>
          Additional academic references from professors in Computer Science, Finance, and Mathematics 
          departments are available upon request. These include instructors from advanced coursework in 
          machine learning, data structures, financial analysis, and quantitative methods.
        </Paragraph>

        <SubTitle>Professional Network</SubTitle>
        <Paragraph>
          Professional recommendations and endorsements are available on my LinkedIn profile, including 
          connections from the private equity industry, academic institutions, and technology sector.
        </Paragraph>

        <SubTitle>Character References</SubTitle>
        <Paragraph>
          Personal character references from long-term mentors and community leaders are available to 
          provide insights into work ethic, integrity, and personal qualities.
        </Paragraph>

        <Note>
          <strong>Confidentiality Note:</strong> All reference contact information will be provided 
          directly to prospective employers during the interview process to maintain privacy and 
          professional discretion.
        </Note>
      </Section>
    </MainContent>
  );
}
