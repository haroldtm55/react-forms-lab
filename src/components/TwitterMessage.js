import React from "react";

class TwitterMessage extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     message: '',
  //     charsAvailable: this.props.maxChars
  //   };
  // }

//THE ABOVE WON'T WORK, WHY?

  state = {
    message: '',
    charsAvailable: this.props.maxChars
  }

  handleChange(event) {
    let remainingChars = this.props.maxChars
    this.setState({
      message: event.target.value,
      charsAvailable: remainingChars - event.target.value.length
    })
    // console.log(this.state.message.length)
    // console.log(this.state.charsAvailable)
  }


  render() {
    // console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event=>this.handleChange(event)} value={this.state.message}/>
        <p>Remaining characters: {this.state.charsAvailable}</p>
      </div>
    );
  }
}

export default TwitterMessage;