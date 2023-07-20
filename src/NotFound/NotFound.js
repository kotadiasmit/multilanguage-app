import NavBar from "../NavBar/NavBar";
import "./NotFound.css";

const NotFound = () => (
  <>
    <NavBar />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
  </>
);

export default NotFound;
