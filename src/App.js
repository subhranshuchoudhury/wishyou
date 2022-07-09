import BirthDay from './Components/Birthday/BirthdayPage';
import './App.css';
// import { useLocation } from 'react-router-dom';




function App() {
  const name =  new URLSearchParams(window.location.search).get('name');
  const from =  new URLSearchParams(window.location.search).get('from');
  
  return <>
    <BirthDay name={name} from={from}/>
  </>;
}

export default App;
