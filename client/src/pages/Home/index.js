import Home from "./Home";
import { connect } from "react-redux";
import * as action from "../../redux/action";

export default connect(state => ({ ...state }), { ...action })(Home);
