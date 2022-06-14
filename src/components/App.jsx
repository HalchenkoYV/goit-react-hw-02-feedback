import './App.css';
import React, { Component } from 'react';
import Container from './Container/Cotainer';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

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
     return (
       <Container>
         <Section title='Please Leave feedback'>
           <Feedback onChoose={this.handleChoose} />
         </Section>
         
         <Section title='Statistics'>
           <Statistics text={this.state} />
         </Section>
      </Container>
    )
  }
};

export default App;