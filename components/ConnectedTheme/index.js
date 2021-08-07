import { connect } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { light, dark } from "../../styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const ConnectedTheme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={!!theme ? light : dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.value,
  };
};

export default connect(mapStateToProps)(ConnectedTheme);
