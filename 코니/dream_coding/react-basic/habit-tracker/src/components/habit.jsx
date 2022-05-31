import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncreament = () => {
        this.setState({count:this.state.count +1});
    }
    handleDecreament = () => {
        const count = this.state.count -1;
        this.setState({count: count<0 ? 0 : count});
    }
    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>

            <button className="habit-button-increase" onClick={this.handleIncreament}>
            <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className="habit-button-decrease" onClick={this.handleDecreament}>
            <i className="fa-solid fa-square-minus"></i>
            </button>
            <button className="habit-button-delete">
            <i className="fa-solid fa-trash"></i>
            </button>
            </li>
        );
    }
}

export default Habit;