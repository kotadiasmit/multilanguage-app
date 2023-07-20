import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import { useContext } from "react";
import languageContext from "../Context/Context";

const Home = () => {
  const { selectedLanguage } = useContext(languageContext);

  let heading = "";
  let para = "";
  let shopNowBtn = "";
  switch (selectedLanguage) {
    case "Arabic":
      heading = "الملابس التي تجذب انتباهك";
      para =
        "الموضة هي جزء من الهواء اليومي ولا يساعد كثيرًا أن تتغير طوال الوقت. لطالما كانت الملابس علامة على العصر ونحن في ثورة. أزياءك تجعلك تُرى وتُسمع بهذه الطريقة. لذا ، احتفل بالمواسم بأزياء جديدة ومثيرة على طريقتك الخاصة.";
      shopNowBtn = "تسوق الآن";
      break;
    case "Hebrew":
      heading = "בגדים שגורמים לך לשים לב";
      para =
        "אופנה היא חלק מהאוויר היומיומי וזה לא ממש עוזר שהיא משתנה כל הזמן. בגדים תמיד היו סמן של התקופה ואנחנו נמצאים במהפכה. האופנה שלך גורמת לך לראות ולשמוע אותך כמו שאתה. אז, תחגוג את העונות האופנה החדשה והמרגשת בדרך שלך.";
      shopNowBtn = "קנה עכשיו";
      break;
    default:
      heading = "Clothes That Get YOU Noticed";
      para =
        "Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.";
      shopNowBtn = "Shop Now";
      break;
  }
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">{heading}</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">{para}</p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              {shopNowBtn}
            </button>
          </Link>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  );
};

export default Home;
