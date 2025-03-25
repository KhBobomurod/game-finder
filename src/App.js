import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const lightTheme = { background: "#fff", text: "#000", cardBg: "#f5f5f5" };
const darkTheme = { background: "#222", text: "#fff", cardBg: "#333" };

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [theme, setTheme] = React.useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header>
          <h1>Game Finder</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ThemeToggle
            onClick={() =>
              setTheme(theme === darkTheme ? lightTheme : darkTheme)
            }
          >
            {theme === darkTheme ? "☀️" : "🌙"}
          </ThemeToggle>
        </Header>
        <GlobalStyle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 10;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

export default App;
