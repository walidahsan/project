import React, { Component } from 'react';
import Dropdata from './Dropdata';
import './Dropdowns.css';

class Dropdowns extends Component {
  state = {
    Buttons: [
      {
        name: 'Public Discussions!',
      },
      {
        name: 'Private Message Inbox',
      },
      {
        name: 'UpVote Answers, Comments And Posting.',
      },
    ],
    showDialoug1: false,
    showDialoug2: false,
    showDialoug3: false,
  };

  toggleDialougBox1 = () => {
    const doesShow1 = this.state.showDialoug1;
    this.setState({ showDialoug1: !doesShow1 });
  };
  toggleDialougBox2 = () => {
    const doesShow2 = this.state.showDialoug2;
    this.setState({ showDialoug2: !doesShow2 });
  };
  toggleDialougBox3 = () => {
    const doesShow3 = this.state.showDialoug3;
    this.setState({ showDialoug3: !doesShow3 });
  };

  render() {
    let showbox1 = null;
    let showbox2 = null;
    let showbox3 = null;
    if (this.state.showDialoug1) {
      showbox1 = <p>hello this is Public Discussions box</p>;
    }
    if (this.state.showDialoug2) {
      showbox2 = <p>hello this is Private Message Inbox box</p>;
    }
    if (this.state.showDialoug3) {
      showbox3 = <p>hello this is UpVote Answers, Comments And Posting box</p>;
    }

    return (
      <div>
        <Dropdata clicked={this.toggleDialougBox1}>
          <button
            onClick={this.toggleDialougBox1}
            className=" buttonStyle btn-block mb-4 p-3"
          >
            {this.state.Buttons[0].name}
          </button>
          {showbox1}
        </Dropdata>
        <Dropdata clicked={this.toggleDialougBox2}>
          <button
            onClick={this.toggleDialougBox2}
            className=" buttonStyle1 btn-block mb-4 p-3"
          >
            {this.state.Buttons[1].name}
          </button>
          {showbox2}
        </Dropdata>
        <Dropdata clicked={this.toggleDialougBox3}>
          <button
            onClick={this.toggleDialougBox3}
            className=" buttonStyle btn-block mb-4 p-3"
          >
            {this.state.Buttons[2].name}
          </button>
          {showbox3}
        </Dropdata>
      </div>
    );
  }
}

export default Dropdowns;
