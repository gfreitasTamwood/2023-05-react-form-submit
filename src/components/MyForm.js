import React from 'react';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', position: '', email: '' };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        fetch('http://localhost:5000/form-submit', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function(response) {
            return response.json();
        });
        event.preventDefault();
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                </label>
                <label>
                    Position:
                    <input type="text" value={this.state.position} name="position" onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <button type='submit'>HI</button>
            </form>
        );
    }
}

export default MyForm;