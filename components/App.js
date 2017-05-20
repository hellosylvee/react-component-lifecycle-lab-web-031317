import React from 'react';
import TweetWall from './TweetWall';
require('fbjs/lib/ExecutionEnvironment').canUseDOM = true
import { getTweets }from '../lib/mockAPI';
import { initialize, update } from '../lib/chart';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      latestTweets: []
    };
    initialize();
    this.updateChart = this.updateChart.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  // componentWillMount()
  componentWillMount() {
    this.fetchTweets()
  }

  // componentDidMount()
  componentDidMount() {
    this.startInterval()
  }

  // componentWillUnmount()
  componentWillUnmount(){
    this.cleanUpInterval()
  }

  // componentDidUpdate()
  componentDidUpdate() {
    this.updateChart(this.state.latestTweets.length)
  }

  updateChart(numTweets) {
    update(numTweets);
  }

  startInterval() {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  fetchTweets() {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  } // this will fetch new tweets, and updating the state

  render() {
    return (
      <div><TweetWall newTweets={this.state.latestTweets} /></div>
    )
  }
}
