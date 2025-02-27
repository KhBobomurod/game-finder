import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
html{
  &::-webkit-scrollbar{
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb{
    background: #999;
    border-radius: 1rem;
  }
body{
  font-family: 'SF Pro', sans-serif;
  overflow-x: hidden;
  width: 100%;
}
h2{
  font-size: 3rem;    
}
h3{
  font-size: 1.3rem;
  padding: 0.5rem;
}
p{
  font-size: 1.2rem;
  line-height: 200%;
  color: #777;
}
a{
  text-decoration: none;
  color: black;
}
}
`;

export default GlobalStyle;
