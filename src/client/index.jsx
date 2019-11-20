import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './tweets.js';

class App extends React.Component {
  render() {
    return (
      <div>
        tweets
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");