import { useState, useRef, useEffect } from "react";
import "./App.css";

const OTP_DIGITS_COUNTS = 5;

function App() {
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNTS).fill("")
  );
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newArr = [...inputArr];
    const newValue = value.trim();
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace") {
    refArr.current[index - 1]?.focus();
    }
  }

  return (
    <div>
      <h1>OTP Input</h1>

      {inputArr.map((input, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            type="text"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}

export default App;
