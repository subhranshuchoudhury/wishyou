import './birthday.css';
function BirthdayPage(props) {

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
      <div className="text">May all your dreams come true and May God crown you with all the success in life. Wishing you many returns of this day. Happy birthday! From, Your Name
      </div>

      <audio id="HBD" loop>
        <source src="https://wishesplus.com/wp-content/uploads/2021/02/Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3"></source>
      </audio>
    

    </div>
  );
}

export default BirthdayPage;