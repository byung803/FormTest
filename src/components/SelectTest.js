import React, { Component } from 'react';

class SelectTest extends Component {
    state = { value: [''] }

    handleSelect = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        // this.setState(() => ({ value: e.target.value }));
        // this.setState({ value: e.target.value });
        e.persist();
        this.setState(() => {
            return {
                value: e.target.value
            };
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select multiple={true} value={this.state.value} onChange={this.handleSelect}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                        <option value="ReactNative">ReactNative</option>
                        <option value="Jquery" >Jquery</option>
                    </select>
                </label>
                <input type="submit" value="제출" />
            </form>
        );
    }
}

export default SelectTest;