import buttons from "../data/buttons";
import Button from "./Button";
import { useState } from "react";

// Helper function to truncate the result to 5 decimal places
const truncate = (value, decimalPlaces) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.trunc(value * factor) / factor;
};

export const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (label, type) => {
    if (type === "function") {
      if (label === "AC") {
        setDisplay("");
      } else if (label === "DE") {
        setDisplay(display.slice(0, -1));
      } else if (label === "=") {
        // Evaluate the expression and truncate to 5 decimal places
        const result = eval(display);
        const truncatedResult = truncate(result, 5);
        setDisplay(truncatedResult.toString());
      }
    } else if (type === "operator") {
      setDisplay(display + label);
    } else {
      setDisplay(display + label);
    }
    console.log(display);
  };

  return (
    <div className="w-[400px] h-[640px] bg-white rounded-xl p-4 flex flex-col">
      <p className="text-md font-bold">Calculator</p>

      <div
        className="w-full h-[82px] bg-gray-700 mt-2 rounded text-white p-2 flex justify-end items-center"
      >
        <p className="text-5xl">{display}</p>
      </div>

      <div className="flex-1 mt-4">
        <div className="grid grid-cols-4 gap-2 h-full">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              type={btn.type}
              span={btn.span}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;