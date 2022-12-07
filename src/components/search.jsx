import { Link } from "react-router-dom";
import "./review-board.css";

function Search(loading, setLoading) {
  return (
    <div className="search">
      <Link to="/reviews">
        Search Bar and Category filters to be placed here - Link to all reviews
        for now
      </Link>
    </div>
  );
}

export default Search;
