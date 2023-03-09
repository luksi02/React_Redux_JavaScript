import React from "react";
import { connect } from "react-redux";
import Quote from "../components/Quote";
import { fetchQuote } from "../redux/actions";

const mapStateToProps = (globalState) => {
  return {
    quote: globalState.quote.quote,
    loading: globalState.quote.loading,
    error: globalState.quote.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    karofel: () => dispatch(fetchQuote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
