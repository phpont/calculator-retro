import React, { useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState("");

    const calculatorOperations = {
        '/': (firstValue, secondValue) => firstValue / secondValue,
        '*': (firstValue, secondValue) => firstValue * secondValue,
        '+': (firstValue, secondValue) => firstValue + secondValue,
        '-': (firstValue, secondValue) => firstValue - secondValue,
        '=': (firstValue, secondValue) => secondValue
    }

    const performOperation = () => {
        let match = data.match(/(\d+)(.)(\d+)/);
        let firstValue = parseFloat(match[1]);
        let operator = match[2];
        let secondValue = parseFloat(match[3]);

        if (operator in calculatorOperations) {
            setData(calculatorOperations[operator](firstValue, secondValue))
        }
    }

    const handleClick = e => {
        const value = e.target.getAttribute('data-value');
        setData(data + value);
    }

    const handleOperation = e => {
        const value = e.target.getAttribute('data-value');
        if (value === "=") {
            performOperation();
        } else {
            setData(data + value);
        }
    }

    const handleClear = () => {
        setData("");
    }

    return (
        <div className="app">
          <h1 class="title">Paulo Pontarolo - All Rights Reserved</h1>
            <div className="calculator">
                <input type="text" className="value" value={data} />

                <span className="num" onClick={handleClick} data-value="7">7</span>
                <span className="num" onClick={handleClick} data-value="8">8</span>
                <span className="num" onClick={handleClick} data-value="9">9</span>
                <span className="operator" onClick={handleOperation} data-value="/">/</span>

                <span className="num" onClick={handleClick} data-value="4">4</span>
                <span className="num" onClick={handleClick} data-value="5">5</span>
                <span className="num" onClick={handleClick} data-value="6">6</span>
                <span className="operator" onClick={handleOperation} data-value="*">*</span>

                <span className="num" onClick={handleClick} data-value="1">1</span>
                <span className="num" onClick={handleClick} data-value="2">2</span>
                <span className="num" onClick={handleClick} data-value="3">3</span>
                <span className="operator" onClick={handleOperation} data-value="+">+</span>

                <span className="operator" onClick={handleClear} data-value="clear">Clear</span>
                <span className="num" onClick={handleClick} data-value="0">0</span>
                <span className="operator" onClick={handleOperation} data-value="=">=</span>
                <span className="operator" onClick={handleOperation} data-value="-">-</span>
            </div>
        </div>
    );
}

export default App;
