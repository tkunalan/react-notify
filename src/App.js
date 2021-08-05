import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import theme from './Theme';

function App() {
  const routing = useRoutes(routes());
  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
}

export default App;
