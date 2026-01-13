import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./index.css"

const App = () => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

export default App;
