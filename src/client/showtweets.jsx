import React from 'react';
import ReactDOM from 'react-dom';





  class Showtweets extends React.Component {

    render() {
  
      const tweety = this.props.tweets.map( tweet => {
        return 
        <li>{tweet.user.screen_name}</li>
        

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