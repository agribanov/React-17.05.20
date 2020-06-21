import React from 'react';
import { connect } from 'react-redux';
import { add } from '../store/actions';

function Calculator({ value, add }) {
    return (
        <div>
            Calculator : {value}
            <button onClick={() => add(5)}>Add 5</button>
        </div>
    );
}

const mapStateToProps = ({ value }) => ({ value });

const mapDispatchToprops = {
    add,
};
export default connect(mapStateToProps, mapDispatchToprops)(Calculator);
