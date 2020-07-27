// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Styling
import "./HomePage.styles.scss";

// Import: Components
import { ReactComponent as HomeImage } from "../../assets/images/pageImages/home.svg";

// Page: HomePage
function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__introduction">
        <div className="HomePage__introduction-text">
          <h1>rizji keyboards</h1>
          <p>Keyboards by fanatics, for fanatics.</p>
        </div>
        <Link to="/sign-in">
          <div className="HomePage__cta">
            <div className="HomePage__cta-button">
              <span>Sign Up</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="HomePage__image">
        <HomeImage />
      </div>
    </div>
  );
}

// Export: HomePage
export default HomePage;
