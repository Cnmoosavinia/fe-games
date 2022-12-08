import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../api";
import "./review-board.css";

function Search({ loading, setLoading, setChosenCategory }) {
  const [categories, setCategories] = useState([]);

  const selectCategory = (e) => {
    setChosenCategory(e.target.id);
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
            <a href={`/reviews?category=${category.slug}`}>
              <button
                className="category"
                key={category.slug}
                id={category.slug}
                onClick={selectCategory}
              >
                {category.slug}
              </button>
            </a>
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
