import React, { useState } from 'react';
import './App.css';
import { Container, Content, Row } from './styles';
import Input from './components/Input/index';
import Button from './components/Button/index';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [tempNumber, setTempNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num: string) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev} ${num}`)
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+')

    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-')

    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('x')

    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/')

    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handlePerCentNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/')

    } else {
      const sum = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        
        case '-':
          handleMinusNumbers();
        break;

        case 'x':
          handleMultplyNumbers();
        break;

        case '/':
          handleDivideNumbers();
        break;

        case '%':
          handleDivideNumbers();
        break;

        default:
          break;
      }
     
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}></Input>
        <Row>
          <Button label="C" onClick={handleClear}></Button>
          <Button label="%" onClick={handleDivideNumbers}></Button>
          <Button label="/" onClick={() => handleAddNumber('.')}></Button>
          <Button label="x" onClick={handleMultplyNumbers}></Button>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" onClick={() => handleAddNumber('8')}></Button>
          <Button label="9" onClick={() => handleAddNumber('9')}></Button>
          <Button label="-" onClick={handleMinusNumbers}></Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" onClick={() => handleAddNumber('6')}></Button>
          <Button label="+" onClick={handleSumNumbers}></Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" onClick={() => handleAddNumber('3')}></Button>
          <Button label="=" onClick={handleEquals}></Button>
        </Row>

      </Content>
    </Container>
  );
}

export default App;
