import Home from './Components/Home/Home';
import BirthDay from './Components/Birthday/BirthdayWish';
import './App.css';
import Notfound from './Components/NotFound';
// import { useLocation } from 'react-router-dom';




function App() {
  const name =  new URLSearchParams(window.location.search).get('name');
  
  return <>
    <BirthDay name={name}/>
  </>;
}

export default App;
