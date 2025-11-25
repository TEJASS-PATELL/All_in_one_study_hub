import { LuRocket } from "react-icons/lu";
import "../style/Premium.css";

const Premium = () => {
  return (
    <div className="premium-container">
      <h1><span className="icon-wrap"><LuRocket /></span> Welcome to Premium Access!</h1>
      <p>
        You’ve successfully unlocked all premium features.  
        Explore advanced tools and enjoy full access to MyApp.
      </p>

      <button
        onClick={() => alert("This is a demo — premium features coming soon!")}
        className="explore-btn"
      >
        Explore Features
      </button>
    </div>
  );
};

export default Premium;
