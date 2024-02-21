import React, { useState } from 'react';

const Length = () => {
  // cm and feet 
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
  //  centimeter 
  if(selectedFrom === "Centimeter" && selectedTo === "Foot"){
    const conversionRate= 30.48;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Millimeter"){
    const conversionRate= 10;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Decimeter"){
    const conversionRate= 10;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Meter"){
    const conversionRate= 100;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Kilometer"){
    const conversionRate=100000;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Inch"){
    const conversionRate= 2.54;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Mile"){
    const conversionRate= 160934.4;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Yard"){
    const conversionRate= 91.44;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Centimeter" && selectedTo=== "Centimeter"){
   
    const convertedValue = inputValue ;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2
  if(selectedFrom==="Foot" && selectedTo=== "Centimeter"){
    const conversionRate= 30.48;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Millimeter" && selectedTo=== "Centimeter"){
    const conversionRate= 10;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Decimeter" && selectedTo=== "Centimeter"){
    const conversionRate= 10;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Meter" && selectedTo=== "Centimeter"){
    const conversionRate= 100;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Kilometer" && selectedTo=== "Centimeter"){
    const conversionRate=100000;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Inch" && selectedTo=== "Centimeter"){
    const conversionRate= 2.54;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Mile" && selectedTo=== "Centimeter"){
    const conversionRate= 160934.4;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if(selectedFrom==="Yard" && selectedTo=== "Centimeter"){
    const conversionRate= 91.44;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  }
  else{
    handleConvertFoot(); 
    handleConvertMM();
    handleConvertDecimeter();
    handleConvertMeter();
    handleConvertKilometer();
    handleConvertInch();
    handleConvertMile();
  }

}

const handleConvertFoot = () => {

  if (selectedFrom === "Foot" && selectedTo === "Millimeter") {
    const conversionRate = 304.8;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Decimeter") {
    const conversionRate = 3.048;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Meter") {
    const conversionRate = 0.3048;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Kilometer") {
    const conversionRate = 0.0003048;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Inch") {
    const conversionRate = 12;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Mile") {
    const conversionRate = 0.000189394;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Yard") {
    const conversionRate = 0.333333;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Foot" && selectedTo === "Foot") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2

  if (selectedFrom === "Millimeter" && selectedTo === "Foot") {
    const conversionRate = 304.8;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Decimeter" && selectedTo === "Foot") {
    const conversionRate = 0.3048;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Meter" && selectedTo === "Foot") {
    const conversionRate = 3.28084;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Kilometer" && selectedTo === "Foot") {
    const conversionRate = 3280.84;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Inch" && selectedTo === "Foot") {
    const conversionRate = 12;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Mile" && selectedTo === "Foot") {
    const conversionRate = 5280;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Foot") {
    const conversionRate = 3;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  return result;

};   
  
const handleConvertMM = () => {


  if (selectedFrom === "Millimeter" && selectedTo === "Decimeter") {
    const conversionRate = 100;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Millimeter" && selectedTo === "Meter") {
    const conversionRate = 1000;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Millimeter" && selectedTo === "Kilometer") {
    const conversionRate = 1000000;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Millimeter" && selectedTo === "Inch") {
    const conversionRate = 25.4;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Millimeter" && selectedTo === "Mile") {
    const conversionRate = 1609344;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Millimeter" && selectedTo === "Yard") {
    const conversionRate = 914.4;
    const convertedValue = inputValue / conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Millimeter" && selectedTo === "Millimeter") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2


  if (selectedFrom === "Decimeter" && selectedTo === "Millimeter") {
    const conversionRate = 100;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Meter" && selectedTo === "Millimeter") {
    const conversionRate = 1000;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Kilometer" && selectedTo === "Millimeter") {
    const conversionRate = 1000000;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Inch" && selectedTo === "Millimeter") {
    const conversionRate = 25.4;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Mile" && selectedTo === "Millimeter") {
    const conversionRate = 1609344;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Millimeter") {
    const conversionRate = 914.4;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
};


const handleConvertDecimeter = () => {

  if (selectedFrom === "Decimeter" && selectedTo === "Meter") {
    const conversionRate = 0.1;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Decimeter" && selectedTo === "Kilometer") {
    const conversionRate = 1*1e-4;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Decimeter" && selectedTo === "Inch") {
    const conversionRate =3.937;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Decimeter" && selectedTo === "Mile") {
    const conversionRate = 6.214*1e5;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Decimeter" && selectedTo === "Yard") {
    const conversionRate = 0.1094;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Decimeter" && selectedTo === "Decimeter") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2


 
  if (selectedFrom === "Meter" && selectedTo === "Decimeter") {
    const conversionRate = 10;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Kilometer" && selectedTo === "Decimeter") {
    const conversionRate = 1*1e4;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Inch" && selectedTo === "Decimeter") {
    const conversionRate = 0.254;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Mile" && selectedTo === "Decimeter") {
    const conversionRate = 1.609*1e5;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Decimeter") {
    const conversionRate = 9.144;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
};


const handleConvertMeter = () => {

    
  if (selectedFrom === "Meter" && selectedTo === "Kilometer") {
    const conversionRate = 0.001;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Meter" && selectedTo === "Inch") {
    const conversionRate =39.37;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Meter" && selectedTo === "Mile") {
    const conversionRate = 6.214*1e-4;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Meter" && selectedTo === "Yard") {
    const conversionRate = 1.094;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Meter" && selectedTo === "Meter") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2



  if (selectedFrom === "Kilometer" && selectedTo === "Meter") {
    const conversionRate = 1000;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Inch" && selectedTo === "Meter") {
    const conversionRate = 0.0254;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Mile" && selectedTo === "Meter") {
    const conversionRate = 1609.34;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Meter") {
    const conversionRate = 0.9144;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
};

const handleConvertKilometer = () => {

    
  
  if (selectedFrom === "Kilometer" && selectedTo === "Inch") {
    const conversionRate =39370.1;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Kilometer" && selectedTo === "Mile") {
    const conversionRate = 0.621371;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Kilometer" && selectedTo === "Yard") {
    const conversionRate =1093.61;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Kilometer" && selectedTo === "Kilometer") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2



  if (selectedFrom === "Inch" && selectedTo === "Kilometer") {
    const conversionRate = 2.54*1e-5;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Mile" && selectedTo === "Kilometer") {
    const conversionRate = 1.60934;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Kilometer") {
    const conversionRate = 0.0009144;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
};

const handleConvertInch = () => {

    
  
  
  if (selectedFrom === "Inch" && selectedTo === "Mile") {
    const conversionRate = 1.5783*1e-5;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Inch" && selectedTo === "Yard") {
    const conversionRate =0.027778;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Inch" && selectedTo === "Inch") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2



 
  if (selectedFrom === "Mile" && selectedTo === "Inch") {
    const conversionRate = 63360;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Inch") {
    const conversionRate = 36;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
};

  
const handleConvertMile = () => {

    
  
  
    
  if (selectedFrom === "Mile" && selectedTo === "Yard") {
    const conversionRate =1760;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Mile" && selectedTo === "Mile") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
  if (selectedFrom === "Yard" && selectedTo === "Yard") {

    const convertedValue = inputValue;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };

  // #2



 
  
  if (selectedFrom === "Yard" && selectedTo === "Mile") {
    const conversionRate = 0.00056818;
    const convertedValue = inputValue * conversionRate;
   return setResult(
      <p>
        <u>{inputValue}</u> {selectedFrom} is approximately <u >{convertedValue}</u> {selectedTo}
      </p>
    );
  };
};


  return (
    <div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <div>
        <select class="form-select" value={selectedFrom} onChange={handleFromChange}>
          <option hidden>Choose Length</option>
          <option value="Foot">Foot</option>
          <option value="Millimeter">Millimeter</option>
          <option value="Centimeter">Centimeter</option>
          <option value="Decimeter">Decimeter</option>
          <option value="Meter">Meter</option>
          <option value="Kilometer">Kilometer</option>
          <option value="Inch">Inch</option>
          <option value="Mile">Mile</option>
          <option value="Yard">Yard</option>
        </select>
        <select class="form-select" value={selectedTo} onChange={handleToChange}>
          <option hidden>Choose Convert Length</option>
          <option value="Foot">Foot</option>
          <option value="Millimeter">Millimeter</option>
          <option value="Centimeter">Centimeter</option>
          <option value="Decimeter">Decimeter</option>
          <option value="Meter">Meter</option>
          <option value="Kilometer">Kilometer</option>
          <option value="Inch">Inch</option>
          <option value="Mile">Mile</option>
          <option value="Yard">Yard</option>
        </select>
      </div>
      <div class="mt-3">
        <input class="form-control Input-Box" type="text" value={inputValue} placeholder={selectedFrom} onChange={handleInputChange} />
        <button class="btn btn-primary mt-2" onClick={handleConvert}>Convert</button>
      </div>
      <div class="mt-3">
        <p>{result}</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Length;
