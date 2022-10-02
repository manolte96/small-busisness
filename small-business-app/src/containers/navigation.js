import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: (isLogged) => dispatch(logOutUser((isLogged = false))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);