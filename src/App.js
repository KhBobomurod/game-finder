import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Header>
        <h1>Game Finder</h1>
      </Header>
      <GlobalStyle />
      <Home />
    </div>
  );
}

const Header = styled.div`
position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
  background: #222;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
z-index: 10;
  h1 {
    font-size: 2rem;
  }
`;

export default App;
