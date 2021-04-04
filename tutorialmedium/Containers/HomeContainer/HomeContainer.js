import { connect } from 'react-redux';

import Home from '../../Components/Home/Home';
import * as homeActions from '../../Store/Actions/actions';


const mapStateToProps = state => {
  return {
    'page': state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (payload) => dispatch(homeActions.getPosts2(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
