import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <div className="Landing">
      <div className="Landing--Home" id="home">
        <div className="Landing--HomeContent">
          <div className="Landing--HomeContentTop">
            <div>
              <button className="button" onClick={handleGetStartedClick}>
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
