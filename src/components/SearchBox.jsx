import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";

import classes from "./SearchBox.module.css";

function SearchBox() {
  const searchId = useId();
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearch = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={classes["search-box"]}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        value={value || ""}
        type="search"
        className={classes["search-box-input"]}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBox;
