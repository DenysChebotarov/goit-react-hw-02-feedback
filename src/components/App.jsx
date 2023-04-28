import { Component } from "react"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

export class App extends Component{
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.neutral,
  }
clickButtonGood = () => this.setState({good : this.state.good +1});
clickButtonNeutral = () => this.setState({neutral : this.state.neutral +1});
clickButtonBad = () => this.setState({bad : this.state.bad +1});  

  countTotalFeedback = (res) => Object.values(res).reduce((acc,el)=>acc+el);

  
  countPositiveFeedbackPercentage = (good,total) => Math.round(good*100/total);

  
  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback(this.state);
    const PositiveFeedback = this.countPositiveFeedbackPercentage(good,total);
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions clickButtonGood={this.clickButtonGood} clickButtonNeutral={this.clickButtonNeutral} clickButtonBad={this.clickButtonBad}/>

        <Statistics good={good} neutral={neutral} bad={bad} total={total} PositiveFeedback={PositiveFeedback}/>
      </div>
    )
  
  }
}

