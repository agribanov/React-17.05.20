import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../store/actions/fitlers';

function Fitlers({ filter, allTodosCount, setFilter }) {
    return (
        <div>
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                All ({allTodosCount})
            </button>
            <button onClick={() => setFilter('done')}>Done</button>
            <button onClick={() => setFilter('todo')}>Todo</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        filter: state.filters.filter,
        allTodosCount: state.todos.todos.length,
    };
}

const mapDispatchToProps = {
    setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Fitlers);
