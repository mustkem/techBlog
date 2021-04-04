import { connect } from 'react-redux';
import { testAction } from '../Store/Actions/promiseBasedAction';
import Component from '../Components/PromiseBasedActionComponent/PromiseBasedActionComponent'


export default connect(null, {
    testAction
})(Component);
