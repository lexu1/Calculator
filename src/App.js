import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [display2, setDisplay2] = useState("");

  const onPress = (e) => {
    setDisplay(e);

    if (
      (e === "+" || e === "-" || e === "*" || e === "/" || e === "=") &&
      (display2.charAt(display2.length - 1) === "+" ||
        display2.charAt(display2.length - 1) === "-" ||
        display2.charAt(display2.length - 1) === "*" ||
        display2.charAt(display2.length - 1) === "/")
    ) {
      setDisplay2(display2.slice(0, -1) + e);
    } else {
      setDisplay2(display2 + e);
    }
  };
  const onClickC = () => {
    setDisplay2("");
    setDisplay("");
  };
  const onClickEqual = () => {
    // eslint-disable-next-line no-eval
    setDisplay2(eval(display2));
  };

  return (
    <div className="App">
      <div className="main-box">
        <div>
          <div className="display">{display2}</div>
          <div className="display">{display}</div>
        </div>
        <div className="first-row flex ">
          <div
            className="button-dim2 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            ac
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            /
          </div>
          <div
            className="button-dim3 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            *
          </div>
        </div>
        <div className="second-row flex ">
          <div
            className="button-dim3 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            7
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            8
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            9
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            -
          </div>
        </div>
        <div className="third-row flex ">
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            4
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            5
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            6
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            +
          </div>
        </div>
        <div className="fourth-row flex ">
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            1
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            2
          </div>
          <div
            className="button-dim1 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            3
          </div>
          <div className="button-dim1 button" onClick={onClickEqual}>
            =
          </div>
        </div>
        <div className="fifth-row flex ">
          <div
            className="button-dim2 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            0
          </div>
          <div
            className="button-dim3 button"
            onClick={(e) => onPress(e.target.innerText)}
          >
            .
          </div>
          <div className="button-dim3 button" onClick={onClickC}>
            C
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
