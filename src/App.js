import Home from './Components/Home/Home';
import BirthDay from './Components/Birthday/BirthdayWish';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Notfound from './Components/NotFound';



function App() {
  return <>
  <h1>Hii commit 8</h1>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/wish/:name" element={<BirthDay />} />
      <Route element={<Notfound />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
