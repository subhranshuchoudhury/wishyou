import BirthDay from './Components/Birthday/BirthdayPage';
import './App.css';
// import { useLocation } from 'react-router-dom';




function App() {
  const name =  new URLSearchParams(window.location.search).get('name');
  
  return <>
    <BirthDay name={name}/>
  </>;
}

export default App;
