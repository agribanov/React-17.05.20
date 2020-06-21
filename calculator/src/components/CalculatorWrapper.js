import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Calculator from './Calculator';
import { add } from '../store/actions';

// mapStateToProps
// mapDispatchToprops

function mapStateToProps(state) {
    return {
        value: state.value,
    };
}

const mapDispatchToprops = {
    add,
};

export default connect(mapStateToProps, mapDispatchToprops)(Calculator);
