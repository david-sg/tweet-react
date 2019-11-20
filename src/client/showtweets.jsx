import React from 'react';
import ReactDOM from 'react-dom';


class Eachtweet extends React.Component {

}

  class Showtweets extends React.Component {

    render() {
  
      const tweety = this.props.tweets.map( tweet => {
        console.log(tweet.user.screen_name)
        return <li>{tweet.user.screen_name} {tweet.text}</li>
      });
      return (
        <div>
          <ul>
          {tweety}
          </ul>
        </div>
      );
    }
  }

    
 export default Showtweets;