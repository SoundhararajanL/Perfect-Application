import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters ** 2)).toFixed(2);

      if (calculatedBMI < 18.5) {
        setBMI(`Your BMI is ${calculatedBMI}. It's Under weight `);
      } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
        setBMI(`Your BMI is ${calculatedBMI}. It's in the Normal weight`);
      } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
        setBMI(`Your BMI is ${calculatedBMI}. It's in the Overweight `);
      } else if (calculatedBMI >= 30) {
        setBMI(`Your BMI is ${calculatedBMI}. It's in the Obesity range `);
      } else {
        // Handle any unexpected cases
        setBMI('Unable to determine BMI category.');
      }
    }
  };

  return (
    <div >
     
     
      {/* 1 */}

      <div class="row">
        <div class="col">
        <div class="container">
        <h2>BMI Calculator</h2>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <br />
        <button onClick={calculateBMI}>Calculate BMI</button>
        
      </div>
        </div>
        <div class="col">
        <div >
        <div class="p-3 mb-2 bg-success text-white">Result</div>
        <p>
          {bmi}
        </p>
      </div>
        </div>
      </div>
    </div>

  );
};

export default BMI;
