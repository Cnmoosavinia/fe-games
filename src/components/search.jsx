import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories } from "../api";
import "./review-board.css";

function Search({ loading, setLoading, setChosenCategory, chosenCategory }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const selectCategory = (e) => {
    setChosenCategory(e.target.id);
    navigate(`/reviews?category=${e.target.id}`);
  };

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="loading-screen">Loading...</p>;
  return (
    <div className="search">
      <ul className="categories-list">
        {categories.map((category) => {
          return (
            <button
              className="category"
              key={category.slug}
              id={category.slug}
              onClick={selectCategory}
            >
              {category.slug}
            </button>
          );
        })}
      </ul>
      <button className="view-all">
        <Link to="/reviews">See all</Link>
      </button>
    </div>
  );
}

export default Search;
