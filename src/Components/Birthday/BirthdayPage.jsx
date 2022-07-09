import { useState } from 'react';
import './birthday.css';
// http://localhost:3000/wishyou?name=chintu&&from=raja

function BirthdayPage(props) {

  const [names, setnames] = useState({ field1: "", field2: "" });
  const [link, setlink] = useState("");
  const [visible,setVisible] = useState(false);
  const handleParameters = (event) => {
    const { name, value } = event.target;
    setnames((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const createLink = () => {
    setlink(`?name=${names.field1}&&from=${names.field2}`)
    setVisible(true);

  }

  return (
    <div>
      <div className="wish">
        Happy Birthday {props.name}
      </div>
      <div className="cake">
        <div className="plate"></div>
        <div className="layer"></div>
        <div className="icing">
          <div className="name">
            <p>Happy Birthday <br /> <span id="name">{props.name}</span></p>
          </div>
        </div>
        <div className="candle1">
          <div className="flame1"></div>
        </div>
        <div className="candle2">
          <div className="flame2"></div>
        </div>
        <div className="candle3">
          <div className="flame3"></div>
        </div>
        <div className="candle4">
          <div className="flame4"></div>
        </div>
        <div className="candle5">
          <div className="flame5"></div>
        </div>
      </div>
      <div className="text">Touch The Cake <br></br>May all your dreams come true and May God crown you with all the success in life. Wishing you many returns of this day. Happy birthday {props.name}! From, {props.from}.
        <br></br>
        <input type="text" name='field1' value={names.field1} onChange={handleParameters} placeholder='To..'></input>
        <input type="text" name='field2' value={names.field2} onChange={handleParameters} placeholder='From..'></input>
        {
          visible ? null : <button onClick={createLink}>Create Link</button>
        }
        {
          visible ? <a href={"whatsapp://send?text=https://subhranshuchoudhury.github.io/wishyou" + link} data-action="share/whatsapp/share">Share via Whatsapp</a> : null
        }
      </div>

      <audio id="HBD" loop>
        <source src="https://wishesplus.com/wp-content/uploads/2021/02/Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3"></source>
      </audio>


    </div>
  );
}

export default BirthdayPage;