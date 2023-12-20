import React, { Component } from 'react';

export default class YourComponentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
        quizQuestions: [
            {
              question: "What is the capital city of France?",
              choices: ["Berlin", "Madrid", "Paris", "Rome"],
            },
            {
              question: "Which planet is known as the Red Planet?",
              choices: ["Venus", "Mars", "Jupiter", "Saturn"],
            },
            {
              question: "Who wrote the play 'Romeo and Juliet'?",
              choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            },
            {
              question: "What is the largest mammal in the world?",
              choices: ["Elephant", "Blue Whale", "Giraffe", "Gorilla"],
            },
            {
              question: "In which year did Christopher Columbus reach the Americas?",
              choices: ["1492", "1588", "1776", "1865"],
            },
            {
              question: "Which country is known as the 'Land of the Rising Sun'?",
              choices: ["China", "Japan", "India", "South Korea"],
            },
            {
              question: "What is the currency of Australia?",
              choices: ["Dollar", "Euro", "Yen", "Pound"],
            },
            {
              question: "Who is known as the 'Father of Computer Science'?",
              choices: ["Alan Turing", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
            },
            {
              question: "What is the world's longest river?",
              choices: ["Nile", "Amazon", "Ganges", "Yangtze"],
            },
            {
              question: "Which gas makes up the majority of Earth's atmosphere?",
              choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            },
          ],
      n: 0,
    };
  }

  inc = () => {
    this.setState({ n: this.state.n + 1 });
  };
  dec = () => {
    this.state.n>0 ? (this.setState({n:this.state.n - 1})): (this.setState({n:this.state.n *0}))
    
  }

  render() {
    const { quizQuestions, n } = this.state;
    const currentQuestion = quizQuestions[n];

    return (
      <div className='back'>
        <h1>Questions</h1>
        <p className='question' style={{color: ""}}>{currentQuestion.question}</p>
        <div className='options'>
          {currentQuestion.choices.map((choice, i) => (
            <button key={i} className='answer' style={{color : "white", margin: "20px"}}>
              {choice}
            </button>
          ))}
        </div>
        <div className='funcButns'>
          <button className='funcbutn'onClick={this.dec}>P R E V</button>
          <button className='funcbutn' onClick={this.inc}>
            N E X T
          </button>
          <button className='funcbutn' onClick={() => {
             window.confirm("Are you sure you want to quit?")
          }}>Q U I T</button>
        </div>
      </div>
    );
  }
}
