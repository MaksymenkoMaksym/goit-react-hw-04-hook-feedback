import { Component } from 'react';
import { Section } from './Section/Section';
import { ButtonList } from './Buttons/Buttons';
import { Feedback } from './FeedbackList/FeedbackList';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  data = {
    isClicked: false,
  };
  onLeaveFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
    this.data.isClicked = true;
  };
  countTotalFeedback() {
    const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return total;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    return (
      <>
        <Section title="Please leave feedback" priority={1}>
          <ButtonList
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics" priority={2}>
          {this.data.isClicked ? (
            <Feedback
              list={[
                `good: ${this.state.good}`,
                `neutral: ${this.state.neutral}`,
                `bad: ${this.state.bad}`,
                `Total Feedback: ${this.countTotalFeedback()}`,
                `Positive Feedback: ${this.countPositiveFeedbackPercentage()}%`,
              ]}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
