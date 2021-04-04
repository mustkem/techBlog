import { connect } from 'react-redux';

import AddPost from '../../Components/admin/AddPost/AddPost';
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
