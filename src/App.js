import {useState } from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import {darkTheme, lightTheme} from './theme';
import GlobalStyle from './GlobalStyle';

function App() {
  return(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <Router />
  </ ThemeProvider>
  )
}

export default App;