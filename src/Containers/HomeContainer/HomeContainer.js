import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Home from '../../Components/Home/Home';
import * as homeActions from '../../Store/Actions/actions';


const mapStateToProps = state => {
  return {
    'page': state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (payload) => dispatch(homeActions.getPosts(payload))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
