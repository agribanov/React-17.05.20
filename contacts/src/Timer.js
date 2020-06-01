import React, { Component } from 'react';

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            counts: 0,
        };
    }

    shouldComponentUpdate(nextProps, nexState) {
        const val = nexState.counts % 10;

        console.log(val, !val, nexState);
        return !val;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('counter');
            this.setState({ counts: this.state.counts + 10 });
        }, 5000);
    }

    componentWillUnmount() {
        console.log('clear');
        clearInterval(this.interval);
    }

    render() {
        return <div>{this.state.counts}</div>;
    }
}
