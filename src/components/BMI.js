import React, { useEffect, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiText, setBMIText] = useState(''); // Text representation of BMI
  const [numericBMI, setNumericBMI] = useState(0); // Numeric value of BMI

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters ** 2)).toFixed(2);

      // Update BMI as a number
      const parsedBMI = parseFloat(calculatedBMI);

      if (parsedBMI < 18.5) {
        setBMIText(`Your BMI is ${parsedBMI}. It's Underweight`);
        setNumericBMI(parsedBMI);
      } else if (parsedBMI >= 18.5 && parsedBMI <= 24.9) {
        setBMIText(`Your BMI is ${parsedBMI}. It's in the Normal weight`);
        setNumericBMI(parsedBMI);
      } else if (parsedBMI >= 25 && parsedBMI <= 29.9) {
        setBMIText(`Your BMI is ${parsedBMI}. It's in the Overweight`);
        setNumericBMI(parsedBMI);
      } else if (parsedBMI >= 30) {
        setBMIText(`Your BMI is ${parsedBMI}. It's in the Obesity range`);
        setNumericBMI(parsedBMI);
      } else {
        // Handle any unexpected cases
        setBMIText('Unable to determine BMI category.');
        setNumericBMI(0); // or any default value for unexpected cases
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={calculateBMI}>
            Calculate BMI
          </button>
        </div>
        <div className="col">
          <div className="text-success">Result</div>
          <p>{bmiText}</p>
          {numericBMI <= 50 && (
            <div style={{ display: 'flow' }}>
              <div>
                <ReactSpeedometer
                  maxValue={50}
                  value={numericBMI}
                  valueFormat={'d'}
                  customSegmentStops={[0, 16, 17, 18.5, 25, 30, 35, 40, 50]}
                  segmentColors={["#CB4335", "#F5B7B1", "#F1C40F", "#27AE60", "#F1C40F", "#F5B7B1", "#CD6155", "#CB4335"]}
                  currentValueText={`BMI: ${numericBMI}`}
                  textColor={'black'}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMI;