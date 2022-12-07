import "./header.css";

function Header() {
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
        <p className="username">Cnmoosavinia</p>
        <img
          className="my-face-lol"
          src="https://scontent.fman4-2.fna.fbcdn.net/v/t1.18169-9/1044725_10151527841570922_2110461867_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qzcXY7CFmlcAX9SVbW9&_nc_ht=scontent.fman4-2.fna&oh=00_AfDNLFtojnACZzG2HJZ47hgd88pBRCoEIMZysUuWNBs2Cw&oe=63B7EA0B"
        ></img>
      </div>
    </div>
  );
}
export default Header;
