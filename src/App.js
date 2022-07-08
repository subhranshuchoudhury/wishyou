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
      <Route path="/wishyou" element={<Home />} />
      <Route path="/wishyou/birthday/:name" element={<BirthDay />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
