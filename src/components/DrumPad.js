import React from "react";

class DrumPad extends React.Component {
  //handle click sets audio play,current time to 0 and setting

  //setting this components- and handle key down,and remove it when up
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillMount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  //we also add this to letters click same as on click
  handleKeyDown = e => {
    if (e.keyCode == this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <div className="keyboard">{this.props.letter} </div>

        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        />
      </div>
    );
  }
}

export default DrumPad;
