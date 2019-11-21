import React from 'react';
import ReactDOM from 'react-dom';


class Eachtweet extends React.Component {

}

  class Showtweets extends React.Component {

    render() {
  
      const tweety = this.props.tweets.map( tweet => {
        return (
          <div>
           <div class="card-header">
              {tweet.user.screen_name}
             <img src={tweet.user.profile_image_url} width="15px" className="float-left"/>
             </div>
             
                         <div class="card-body">
                         <h5 class="card-title">{tweet.text}</h5>
                         <p class="card-text">{tweet.created_at}
                        <br/>
                          Retweets: {tweet.retweet_count} | Likes: {tweet.favorite_count}
                        </p>
                        </div>     
                        </div>
        )
      });
      return (
        <div class="card">
          {tweety}
        </div>
      );
    }
  }

    
 export default Showtweets;