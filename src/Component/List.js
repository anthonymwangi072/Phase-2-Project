import React from "react";
import { NavLink } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
// import CallIcon from "@material-ui/icons/Call";
import "../Component/Css/ListStyle.css";
import logo from "../Images/lion.png";
import LoginForm from "../Shared/Components/LoginForm";
import SignUpForm from "../Shared/Components/SignUpForm";

const List = () => {
  const [userDetails, setUserDetails] = React.useState(null);
  const logOut = () => {
    setUserDetails(null);
  };

  return (
    <header>
      <div className="container container-flex">
        {
          <div className="logoContainer">
            <img src={logo} width={70} height={70} alt="logo" />
          </div>
        }
        <nav>
          <div className="list">
            <NavLink to="/" className="listItem" activeClassName="activeItem">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="listItem"
              activeClassName="activeItem"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="listItem"
              activeClassName="activeItem"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="listItem"
              activeClassName="activeItem"
            >
              Contact
            </NavLink>
            {/* <NavLink
              to="/policy"
              className="listItem"
              activeClassName="activeItem"
            >
              Policy
            </NavLink> */}
          </div>
        </nav>
        <div className="icons">
          {userDetails !== null ? (
            userDetails.name
          ) : (
            <>
              <LoginForm
                setUserDetails={setUserDetails}
                userDetails={userDetails}
                className="icon" 
              />
              

              <SignUpForm
                setUserDetails={setUserDetails}
                userDetails={userDetails}
                className="icon" 
              />
            </>
          )}
          {/* <SearchIcon className="icon" />
          <PersonIcon className="icon" />
          <CallIcon className="icon" /> */}
        </div>
      </div>
    </header>
  );
};
export default List;
