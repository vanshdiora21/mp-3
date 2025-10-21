import styled from 'styled-components';
import Calculator from '../components/Calculator';

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

const ProjectTitle = styled.h3`
  color: #444;
  margin-top: 30px;
`;

const Technologies = styled.p`
  color: #666;
  font-style: italic;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.8;
`;

const CalculatorSection = styled.section`
  margin-top: 60px;
  margin-bottom: 40px;
`;

export default function Projects() {
  return (
    <MainContent>
      <Section>
        <Title>Projects</Title>

        <ProjectTitle>Machine Learning Trading System</ProjectTitle>
        <Technologies>
          <strong>Technologies:</strong> Python, Machine Learning, Financial Analysis, Monte Carlo Simulation
        </Technologies>
        <Description>
          Developed a comprehensive trading system with backtesting capabilities, implementing Heston model 
          integration with Monte Carlo simulation. Created modular components including strategy.py for trading 
          logic, backtester.py for performance testing, metrics.py for statistical analysis, and plotting.py for 
          data visualization using plotly.
        </Description>

        <ProjectTitle>Sweetgreen Financial Valuation Model</ProjectTitle>
        <Technologies>
          <strong>Technologies:</strong> Excel, Financial Modeling, DCF Analysis, Sensitivity Analysis
        </Technologies>
        <Description>
          Created institutional-quality financial analysis and valuation model with detailed cash flow projections, 
          store expansion analysis, and comprehensive ratio calculations. Performed sensitivity analysis, discount 
          rate selection for multiple scenarios, and developed AUV calculations.
        </Description>

        <ProjectTitle>Excel Automation and Data Processing</ProjectTitle>
        <Technologies>
          <strong>Technologies:</strong> Python, Pandas, Excel API, Data Analysis
        </Technologies>
        <Description>
          Developed Python scripts for automated P&L statement processing and rent roll data extraction. Handled 
          complex Excel formats with merged cell processing, dynamic column mapping, and tenant name extraction.
        </Description>

        <ProjectTitle>Vansh's Interactive Calculator</ProjectTitle>
        <Technologies>
          <strong>Technologies:</strong> JavaScript, HTML5, CSS3, React
        </Technologies>
        <Description>
          Built with JavaScript, HTML5 & CSS3. Now recreated in React with custom hooks for improved functionality. 
          Try it out below!
        </Description>
      </Section>

      <CalculatorSection>
        <Calculator />
      </CalculatorSection>
    </MainContent>
  );
}
