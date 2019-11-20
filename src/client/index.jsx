import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets.js';
import Showtweets from 'showtweets';

class App extends React.Component {
  render() {
    return (
      <div>
          <Showtweets tweets = {tweets}/>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");