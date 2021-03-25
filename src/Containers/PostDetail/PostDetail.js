import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PostPage from '../../Components/PostPage/PostPage';
import * as homeActions from '../../Store/Actions/actions';


const mapStateToProps = state => {
  return {
    'page': state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
   getPost: (payload) => dispatch(homeActions.getPost(payload)),
   updatePost: (payload) => dispatch(homeActions.updatePost(payload))
   
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));
