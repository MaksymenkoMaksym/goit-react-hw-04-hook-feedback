import { Component, useState } from 'react';
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
        <Section title="Please leave feedback  -> Class" priority={1}>
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

export const App1 = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const onLeaveFeedback = type => {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
    setIsClicked(true);
  };
  const countTotalFeedback = () => {
    const total = Object.values(feedback).reduce((acc, el) => acc + el, 0);
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback -> Hook" priority={1}>
        <ButtonList
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics" priority={2}>
        {isClicked ? (
          <Feedback
            list={[
              `good: ${feedback.good}`,
              `neutral: ${feedback.neutral}`,
              `bad: ${feedback.bad}`,
              `Total Feedback: ${countTotalFeedback()}`,
              `Positive Feedback: ${countPositiveFeedbackPercentage()}%`,
            ]}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
