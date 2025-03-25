import React from "react";
import { useDispatch } from "react-redux";
import { searchGames, clearSearch } from "../redux/actions/gamesAction";
import styled from "styled-components";
import debounce from "lodash.debounce";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();

  const debouncedSearch = debounce((query) => {
    if (query.trim()) {
      dispatch(searchGames(query));
    }
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) {
      dispatch(clearSearch()); // Input bo'sh bo'lsa qidiruvni tozalash
    } else {
      debouncedSearch(value); // Inputda matn bo'lsa qidiruvni boshlash
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    dispatch(clearSearch());
  };

  return (
    <StyledSearchBar>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="O'yin nomini kiriting..."
        />
        {searchTerm && (
          <button type="button" onClick={handleClear}>
            Tozalash
          </button>
        )}
      </form>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  input {
    padding: 0.5rem;
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    outline: none;
  }
  button {
    padding: 0.5rem 1rem;
    background: #ccc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #aaa;
    }
  }
  @media (max-width: 500px) {
    input {
      width: 150px;
    }
  }
`;

export default SearchBar;
