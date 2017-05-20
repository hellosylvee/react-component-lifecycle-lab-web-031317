import React from 'react';
import Tweet from './Tweet';

export default class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // componentWillMount()
  componentWillMount() {
    this.state.tweets = this.props.newTweets //why is this set to this.props.newTweets?
  }
  // shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    return (this.props.tweets !== nextProps.tweets) // if equal, this return false, so don't update
  }

  // componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    // debugger
    // console.log(tweets)
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets] //what's happening here?
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}
