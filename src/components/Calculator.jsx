import { useState } from 'react';
import { useCalculator } from '../hooks/useCalculator';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  margin: 20px auto;
  padding: 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h3`
  color: white;
  margin: 0 0 20px 0;
  font-size: 1.5em;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  width: 150px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: 2px solid #4CAF50;
  }
  
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: all 0.3s ease;
  min-width: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ClearButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #da190b;
  }
`;

const Output = styled.div`
  padding: 15px;
  margin: 15px 0 0 0;
  background-color: ${props => props.$isNegative ? '#ff4444' : 'white'};
  color: ${props => props.$isNegative ? 'white' : '#333'};
  border-radius: 6px;
  min-height: 50px;
  font-size: 1.3em;
  font-weight: ${props => props.$isNegative ? 'bold' : 'normal'};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  word-break: break-all;
`;

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const { result, isNegative, calculate } = useCalculator();

  return (
    <CalculatorContainer>
      <Title>Calculator</Title>
      <InputContainer>
        <Input
          type="number"
          id="first-number"
          placeholder="First number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <Input
          type="number"
          id="second-number"
          placeholder="Second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={() => calculate('add', firstNumber, secondNumber)}>+</Button>
        <Button onClick={() => calculate('subtract', firstNumber, secondNumber)}>−</Button>
        <Button onClick={() => calculate('multiply', firstNumber, secondNumber)}>×</Button>
        <Button onClick={() => calculate('divide', firstNumber, secondNumber)}>÷</Button>
        <Button onClick={() => calculate('power', firstNumber, secondNumber)}>^</Button>
        <ClearButton onClick={() => calculate('clear')}>Clear</ClearButton>
      </ButtonContainer>
      <Output $isNegative={isNegative} id="output">
        {result || 'Result will appear here'}
      </Output>
    </CalculatorContainer>
  );
}
