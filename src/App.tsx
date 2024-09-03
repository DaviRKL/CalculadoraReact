import React, { useState } from 'react';
import './App.css';
import { Container, Content, Row } from './styles';
import Input from './components/Input/index';
import Button from './components/Button/index';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num: string) => {
    setCurrentNumber(prev => (prev === '0' ? num : `${prev}${num}`));
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setOperation('');
  }

  const handleOperation = (op: string) => {
    if (currentNumber[currentNumber.length - 1] === ' ') {
      setCurrentNumber(prev => prev.slice(0, -3) + ` ${op} `);
    } else {
      setCurrentNumber(prev => `${prev} ${op} `);
    }
    setOperation(op);
  }

  const handleEquals = () => {
    const elements = currentNumber.split(" ");
    let result = Number(elements[0]);

    for (let i = 1; i < elements.length; i += 2) {
      const operator = elements[i];
      const nextNumber = Number(elements[i + 1]);

      switch (operator) {
        case '+':
          result += nextNumber;
          break;
        case '-':
          result -= nextNumber;
          break;
        case 'x':
          result *= nextNumber;
          break;
        case '/':
          if (nextNumber === 0) {
            setCurrentNumber('Error'); // Divide by zero case
            return;
          }
          result /= nextNumber;
          break;
        case '%':
          result = (result * nextNumber) / 100;
          break;
        default:
          break;
      }
    }

    setCurrentNumber(String(result));
    setOperation('');
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
          <Button label="C" onClick={handleClear}></Button>
          <Button label="✂️" onClick={() => handleOperation('/')}></Button>
          <Button label="%" onClick={() => handleOperation('%')}></Button>
          <Button label="/" onClick={() => handleOperation('/')}></Button>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" onClick={() => handleAddNumber('8')}></Button>
          <Button label="9" onClick={() => handleAddNumber('9')}></Button>
          <Button label="x" onClick={() => handleOperation('x')}></Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" onClick={() => handleAddNumber('6')}></Button>
          <Button label="-" onClick={() => handleOperation('-')}></Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" onClick={() => handleAddNumber('3')}></Button>
          <Button label="+" onClick={() => handleOperation('+')}></Button>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}></Button>
          <Button label="." onClick={() => handleAddNumber('.')}></Button>
          <Button label="🖱️" onClick={() => handleAddNumber(',')}></Button>
          <Button label="=" onClick={handleEquals}></Button>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
