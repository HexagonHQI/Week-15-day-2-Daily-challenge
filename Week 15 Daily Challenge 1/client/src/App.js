import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    input: '',
    responseMessage: ''
  };

  async componentDidMount() {
    try {
      const response = await fetch('/api/hello');
      const message = await response.text();
      this.setState({ message });
    } catch (error) {
      console.error('Error fetching the message:', error);
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: this.state.input })
      });
      const message = await response.text();
      this.setState({ responseMessage: message });
    } catch (error) {
      console.error('Error sending the message:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;
