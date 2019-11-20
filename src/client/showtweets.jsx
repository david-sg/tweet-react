import React from 'react';
import ReactDOM from 'react-dom';


class Eachtweet extends React.Component {

}

  class Showtweets extends React.Component {

    render() {
  
      const tweety = this.props.tweets.map( tweet => {
        console.log(tweet.user.screen_name)
        return (
        <div> 
        <img src={tweet.user.profile_image_url} width="15px" className="float-left"/>
          <h2>{tweet.user.screen_name}</h2>{tweet.created_at}<br/>
         {tweet.text} <br/>
         Retweets: {tweet.retweet_count} | Likes: {tweet.favorite_count}
         <br/>
      
          </div>
        )
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