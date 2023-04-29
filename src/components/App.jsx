import React, { Component } from "react"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
clickButtonGood = () => this.setState({good : this.state.good +1});
clickButtonNeutral = () => this.setState({neutral : this.state.neutral +1});
clickButtonBad = () => this.setState({bad : this.state.bad +1});  

  countTotalFeedback = (res) => Object.values(res).reduce((acc,el)=>acc+el);
  // countTotalFeedback = () => {
  //   return this.state.good + this.state.neutral + this.state.bad
  // }

  countPositiveFeedbackPercentage = (good,total) => Math.round(good*100/total);
  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   if(!total){
  //     return 0;
  //   }
  //   return Math.round(this.state.good / total *100);
  // }


// onLeaveFeedback = event => {
//   this.setState(prevState => {
//     return {
// [event.target.name] : prevState[event.target.name] +1
//     }
//   })
// }
  
  render() {
    const options = Object.keys(this.state);

    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage(good,total);
    return (
      <div>
        <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} clickButtonGood={this.clickButtonGood} clickButtonNeutral={this.clickButtonNeutral} clickButtonBad={this.clickButtonBad}/>
        </Section>
        <Section>
        {total 
        ? 
        <Statistics title='Statistics' good={good} neutral={neutral} bad={bad} total={total} positiveFeedback={positiveFeedback}/> 
        : <Notification message = 'There is no feedback'></Notification>}
        </Section>
      </div>
    )
  
  }
}

