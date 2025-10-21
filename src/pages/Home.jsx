import styled from 'styled-components';

const MainContent = styled.main`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const HomeContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
  
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #667eea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  
  @media (max-width: 750px) {
    width: 200px;
    height: 200px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Section = styled.section`
  margin-bottom: 40px;
  line-height: 1.8;
`;

const Title = styled.h2`
  color: #333;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 2em;
`;

const Paragraph = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-size: 1.1em;
  text-align: justify;
`;

export default function Home() {
  return (
    <MainContent>
      <HomeContainer>
        <ProfileImage 
          src="/images/profile.jpg" 
          alt="Vansh Diora Profile Picture" 
        />
        <TextContent>
          <Section>
            <Title>Home</Title>
            <Paragraph>
              My name is Vansh Diora, and I am a Computer Science and Finance student at 
              Boston University. I am actively preparing for entry-level investment analyst 
              roles while developing technical skills in Python and machine learning. I would 
              like to further my career in finance, technology, or a combination of both fields.
            </Paragraph>
            <Paragraph>
              Welcome to my website, here you will find my Educational and my Employment 
              history; as well as other information that might be of interest to you.
            </Paragraph>
            <Paragraph>
              I have experience in private equity through my internship at Caprae Capital 
              Partners, and I am currently pursuing advanced coursework in financial modeling, 
              data analysis, and machine learning. My Projects showcase my technical abilities 
              in Python development and financial analysis.
            </Paragraph>
          </Section>
        </TextContent>
      </HomeContainer>
    </MainContent>
  );
}
