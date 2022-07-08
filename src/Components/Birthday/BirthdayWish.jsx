import './birthday.css'
import { useParams } from "react-router-dom";
const BirthDay = ()=> {
    let params = useParams();
    return <>
    <h1 className="bpageTitle">Birthday Page of {params.name}</h1>
    </>
}

export default BirthDay;