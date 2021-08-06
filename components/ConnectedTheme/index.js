import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../../styles/theme";

const ConnectedTheme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={!!theme ? light : dark}>{children}</ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.value,
  };
};

export default connect(mapStateToProps)(ConnectedTheme);
