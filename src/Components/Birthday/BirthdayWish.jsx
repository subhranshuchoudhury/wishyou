import './birthday.css'
const BirthDay = (props)=> {
    return <>
    <h1 className="bpageTitle">Birthday Page of {props.name ? props.name : "Error!"}</h1>
    </>
}

export default BirthDay;