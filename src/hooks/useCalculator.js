import { useState } from 'react';

export function useCalculator() {
  const [result, setResult] = useState('');
  const [isNegative, setIsNegative] = useState(false);

  const calculate = (operation, firstNumber, secondNumber) => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      setIsNegative(false);
      return;
    }

    let calculatedResult;
    switch (operation) {
      case 'add':
        calculatedResult = num1 + num2;
        break;
      case 'subtract':
        calculatedResult = num1 - num2;
        break;
      case 'multiply':
        calculatedResult = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
          setIsNegative(false);
          return;
        }
        calculatedResult = num1 / num2;
        break;
      case 'power':
        calculatedResult = Math.pow(num1, num2);
        break;
      case 'clear':
        setResult('');
        setIsNegative(false);
        return;
      default:
        return;
    }

    setResult(calculatedResult);
    setIsNegative(calculatedResult < 0);
  };

  return { result, isNegative, calculate };
}
