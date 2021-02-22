import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AddPost from '../../Components/AddPost/AddPost';
import * as homeActions from '../../Store/Actions/actions';


const mapStateToProps = state => {
  return {
    'page': state.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (payload) => dispatch(homeActions.addPost(payload)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));
