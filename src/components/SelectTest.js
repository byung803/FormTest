import React, { Component } from 'react';

class SelectTest extends Component {
    state = { value: '' }

    handleSelect = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        // this.setState(() => ({ value: e.target.value }));
        this.setState({ value: e.target.value });
        // this.setState(() => {
        //     return { value: e.target.value };
        // });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handleSelect}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                        <option value="reactNative">ReactNative</option>
                        <option value="jquery">Jquery</option>
                    </select>
                </label>
                <input type="submit" value="제출" />
            </form>
        );
    }
}

export default SelectTest;