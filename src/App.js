import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/routes";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
