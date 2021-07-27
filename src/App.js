import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const routing = useRoutes(routes());
  return (
    <React.Fragment>
      {routing}
    </React.Fragment>
  );
}

export default App;
