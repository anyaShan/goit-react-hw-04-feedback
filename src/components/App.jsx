import { useState } from 'react';
import { Container } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateValue = event => {
    const key = event.currentTarget.name;

    switch (key) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={updateValue} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFedback={
              countPositiveFeedbackPercentage()
                ? countPositiveFeedbackPercentage()
                : 0
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

// ============================================================

// export class App1 extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   updateValue = event => {
//     const key = event.currentTarget.name;
//     this.setState(prevState => ({
//       [key]: (prevState[key] += 1),
//     }));
//   };

// countTotalFeedback() {
//   return Object.values(this.state).reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
// }

// countPositiveFeedbackPercentage() {
//   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// }

//   render() {
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions onLeaveFeedback={this.updateValue} />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positiveFedback={
//                 this.countPositiveFeedbackPercentage()
//                   ? this.countPositiveFeedbackPercentage()
//                   : 0
//               }
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
