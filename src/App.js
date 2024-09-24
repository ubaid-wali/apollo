// import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="h-100 d-flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
