function Sort({ setSortBy, setOrderBy }) {
  const selectFilter = (e) => {
    setSortBy(e.target.value);
  };

  const selectOrder = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div>
      <label>
        Sort By:{"  "}
        <select onChange={selectFilter}>
          <option value=""></option>
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="votes">Upvotes</option>
          <option value="comment_count">Comments</option>
        </select>
        {"  "}
      </label>
      <label>
        Order By:{"  "}
        <select onChange={selectOrder}>
          <option value=""></option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default Sort;
