import Home from './Components/Home/Home';
import BirthDay from './Components/Birthday/BirthdayWish';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="birthday/:name" element={<BirthDay />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
