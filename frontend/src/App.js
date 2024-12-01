import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import './styles.css';

 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
       </Routes>
    </div>
  );
}

export default App;
