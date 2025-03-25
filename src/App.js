import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div>
      <Header>
        <h1>Game Finder</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Header>
      <GlobalStyle />
      <Home />
    </div>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0; /* Yuqoridan masofa 0 qilib sayt tepasiga yopishadi */
  width: 100%;
  display: flex;
  justify-content: space-between; /* H1 chapda, SearchBar o'ngda */
  align-items: center;
  padding: 0.5rem 2rem; /* Ichki masofani oshirdik */
  background: #222;
  color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
  h1 {
    font-size: 2rem;
    margin: 0; /* H1 uchun qo'shimcha marginlarni olib tashlaymiz */
  }
`;

export default App;
