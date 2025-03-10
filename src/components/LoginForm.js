import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username!=='' && this.state.password!=='') {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(e)=>this.handleChange(e)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(e)=>this.handleChange(e)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
