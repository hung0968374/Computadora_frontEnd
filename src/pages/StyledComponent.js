import React from "react";
import { useState, useEffect } from "react";

import {
  Wrapper,
  Title,
  Input,
  Detail,
} from "../components/styleComponent/style";

import { ThemeProvider } from "styled-components";
import { useRef } from "react";

function StyledComponent() {
  const [toggleColorToDark, setToggleColorToDark] = useState(true);
  const [userInput, setUserInput] = useState("bruh");
  const inputRef = useRef();
  const theme = {
    main: "mediumseagreen",
    origin: "blue",
  };
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  console.log("user input", userInput);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title turnToDark={toggleColorToDark}>
          abc
          <button onClick={() => setToggleColorToDark(!toggleColorToDark)}>
            Toggle to darkness
          </button>
        </Title>
        <br />

        <Input
          type={`${toggleColorToDark ? "text" : "file"}`}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          ref={inputRef}
        />
        <Detail>
          <summary>title</summary>
          <p>Contentnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
        </Detail>
        <br />
        <br />
        <Input type="text" list="food"></Input>
        <datalist id="food">
          <option value="abc"></option>
          <option value="abc1"></option>
          <option value="abc2"></option>
          <option value="abc3"></option>
        </datalist>
      </Wrapper>
    </ThemeProvider>
  );
}

export default StyledComponent;
