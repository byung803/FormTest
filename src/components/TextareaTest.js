import React, { Component } from 'react';

class TextareaTest extends Component {
    state = { note: '' }

    onNoteChange = (e) => {
        this.setState({ note: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.note);
        alert(this.state.note);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="placeholder" />
                <input type="submit" />
            </form>
        );
    }
}

export default TextareaTest;