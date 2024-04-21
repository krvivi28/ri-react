import { connect } from "react-redux";
import Count from "../components/Count";
import { incCount } from "../redux/actions/countActions/action.js";

// const mapDispatchToProps = dispatch => ({
//   incCount: (data) => dispatch(incCount(data)),
// });

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (data) => {
      dispatch(incCount(data));
    },
  };
};

const mapStateToProps = (state) => {
  return { count: state.countReducer.count };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
