import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }

  const somar = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  const subtrair = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  const multiplicar = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("");
      setOperation("x");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  const dividir = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }  

  const handleEquals = () => {
    if(firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          somar();
          break;
        
        case "-":
          subtrair();
          break;

        case "x":
          multiplicar();
          break;  
          
        case "/":
          dividir();
          break;             

        default:
          break;
      }
    }
  }


  const inputValue = operation !== "" ? `${firstNumber} ${operation} ${currentNumber}` : currentNumber;

  return (
    <Container>
      <Content>
        <Input value={inputValue} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="+/-" onClick={() => handleAddNumber("+/-")} />
          <Button label="%" onClick={() => handleAddNumber("%")} />
          <Button label="/" onClick={dividir} color="#005db2"/>
        </Row>        
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={multiplicar} color="#005db2"/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={subtrair} color="#005db2"/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={somar} color="#005db2"/>
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="=" onClick={handleEquals} color="#005db2"/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;