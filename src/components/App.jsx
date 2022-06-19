import './App.css';
import React, { Component } from 'react';
import Container from './Container/Cotainer';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component  {
   state = {
    good: 0,
    neutral: 0,
    bad: 0
   }
  handleChoose = e => {
    const curMark = e.currentTarget.textContent.toLowerCase()
    
    this.setState(prevState => {
      return { [curMark]: this.state[curMark] + 1 }
    })
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const renderNotification = (good + neutral + bad) === 0;

     return (
       <Container>
         <Section title='Please Leave feedback'>
           <Feedback onChoose={this.handleChoose} />
         </Section>
         
         <Section title='Statistics'>
           {renderNotification ? <Notification message="There is no feedback"/> : <Statistics text={this.state} />}
         </Section>
         
      </Container>
    )
  }
};

export default App;


