import React, { useState } from 'react';
import Thermometer from "react-thermometer-component";

const Temperature = () => {
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleFromChange = (e) => {
        setSelectedFrom(e.target.value);
    };

    const handleToChange = (e) => {
        setSelectedTo(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleConvert = () => {
        let convertedValue;

        if (selectedFrom === "Celsius" && selectedTo === "Fahrenheit") {
            convertedValue = (inputValue * 9 / 5) + 32;
        } else if (selectedFrom === "Celsius" && selectedTo === "Kelvin") {
            convertedValue = parseFloat(inputValue) + 273.15;
        } else if (selectedFrom === "Fahrenheit" && selectedTo === "Celsius") {
            convertedValue = (inputValue - 32) * 5 / 9;
        } else if (selectedFrom === "Fahrenheit" && selectedTo === "Kelvin") {
            convertedValue = (inputValue - 32) * 5 / 9 + 273.15;
        } else if (selectedFrom === "Kelvin" && selectedTo === "Celsius") {
            convertedValue = parseFloat(inputValue) - 273.15;
        } else if (selectedFrom === "Kelvin" && selectedTo === "Fahrenheit") {
            convertedValue = (inputValue - 273.15) * 9 / 5 + 32;
        } else {
            // Handle invalid conversion
            return setResult(<p>Invalid conversion</p>);
        }

        // Check if convertedValue is a number before applying toFixed
        if (typeof convertedValue === 'number') {
            // Convert the value to a string with two decimal places
            convertedValue = convertedValue.toFixed(2);
        }

        return setResult(
            <p>
                <u>{inputValue}</u> {selectedFrom} is approximately <u>{convertedValue}</u> {selectedTo}
            </p>
        );
    };

    const renderThermometer = () => {
        if (result !== '') {
            let value, format, max;
            if (selectedTo === 'Kelvin') {
                value = parseFloat(inputValue) + 273.15;
                format = 'K';
                max = 3730;
            } else {
                switch (selectedTo) {
                    case 'Celsius':
                        value = inputValue;
                        format = '°C';
                        max = 100;
                        break;
                    case 'Fahrenheit':
                        value = (inputValue * 9 / 5) + 32;
                        format = '°F';
                        max = 300;
                        break;
                    default:
                        value = 0;
                        format = '';
                        max = 1000;
                }
            }
    
            return (
                <Thermometer
                    theme="light"
                    value={value}
                    max={max}
                    steps="3"
                    format={format}
                    size="large"
                    height="300"
                />
            );
        }
        return null; 
    };
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div>
                        <select className="form-select" value={selectedFrom} onChange={handleFromChange}>
                            <option hidden>Choose Temperature</option>
                            <option value="Celsius">Celsius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                        <select className="form-select" value={selectedTo} onChange={handleToChange}>
                            <option hidden>Choose Convert Temperature</option>
                            <option value="Celsius">Celsius</option>
                            <option value="Fahrenheit">Fahrenheit</option>
                            <option value="Kelvin">Kelvin</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <input className="form-control Input-Box" type="text" value={inputValue} placeholder={selectedFrom} onChange={handleInputChange} />
                        <button className="btn btn-primary mt-2" onClick={handleConvert}>Convert</button>
                    </div>
                    <div className="mt-3">
                        <p>{result}</p>
                        {renderThermometer()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temperature;
