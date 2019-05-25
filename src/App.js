import React, { Component } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";

//datas with id letter and links
const data = [
  {
    id: "classic",
    letter: "Q",
    src: "https://www.myinstants.com/media/sounds/classic.mp3"
  },
  {
    id: "bass 1",
    letter: "W",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3"
  },
  {
    id: "bongo",
    letter: "E",
    src: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"
  },
  {
    id: "tom tom",
    letter: "A",
    src: "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"
  },
  {
    id: "bass 3",
    letter: "S",
    src: "http://billor.chsh.chc.edu.tw/sound/bass4.wav"
  },
  {
    id: "tutturu",
    letter: "D",
    src:
      "https://www.myinstants.com/media/sounds/tuturuu-ringtone-online-audio-converter.mp3"
  },
  {
    id: "piano",
    letter: "Z",
    src: "http://www.elektrorevue.cz/clanky/99011/klav.wav"
  },
  {
    id: "punch",
    letter: "X",
    src: "https://www.myinstants.com/media/sounds/punch.mp3"
  },
  {
    id: "tam",
    letter: "C",
    src: "https://www.myinstants.com/media/sounds/chan.swf.mp3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }
  // sets display to what clicked last
  handleDisplay = display => this.setState({ display });

  render() {
    return (
      // showing what clicked and also settind id-letter-src and display
      //by data names
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>

        {data.map(d => (
          <DrumPad
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
        ))}
      </div>
    );
  }
}

export default App;
