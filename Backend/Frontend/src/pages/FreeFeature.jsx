import "../style/FreeFeature.css";
import { LuRocket } from "react-icons/lu";

export default function Free() {
  return (
    <div className="free-container">
        <h1><span className="icon-wrap"><LuRocket /></span> Welcome to Free Access!</h1>
        <p>
          Explore all basic features of our skeleton web app. Try login, signup,
          view features, FAQ, and reviews — completely free!
        </p>
        <button className="demo-btn">Start Free Demo</button>
    </div>
  );
}
