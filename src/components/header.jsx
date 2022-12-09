import { useEffect, useContext } from "react";
import { getUsers } from "../api";
import { UserContext } from "../context";
import "./header.css";

function Header() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((data) => {
      setUser(data[1]);
    });
  });

  return (
    <div className="Header">
      <div className="company-section">
        <img
          className="logo"
          src="https://www.kindpng.com/picc/m/19-191819_board-games-icon-twitter-logo-round-png-transparent.png"
        ></img>
        <p className="company-name">Gameboard Reviews</p>
      </div>
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search Reviews.."></input>
        </form>
      </div>
      <button className="categories">Categories</button>
      <div className="profile-section">
        <p className="username">{user.username}</p>
        <img className="my-face-lol" src={user.avatar_url}></img>
      </div>
    </div>
  );
}
export default Header;
