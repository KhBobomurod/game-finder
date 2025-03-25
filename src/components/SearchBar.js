import React from "react";
import { useDispatch } from "react-redux";
import { searchGames, clearSearch } from "../redux/actions/gamesAction";
import styled from "styled-components";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchGames(searchTerm));
    } else {
      dispatch(clearSearch()); // Bo'sh bo'lsa tozalash
    }
  };

  // searchTerm o'zgarganda tekshirish
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      dispatch(clearSearch()); // Agar input bo'sh bo'lsa, qidiruvni tozalash
    }
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange} // Yangi handler
          placeholder="O'yin nomini kiriting..."
        />
        <button type="submit">Qidirish</button>
      </form>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  form {
    display: flex;
    gap: 0.5rem;
  }
  input {
    padding: 0.5rem;
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
  }
  button {
    padding: 0.5rem 1rem;
    background: #ff7676;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #ff5555;
    }
  }
  @media (max-width: 500px) {
    input {
      width: 150px;
    }
  }
`;

export default SearchBar;
