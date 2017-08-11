import React, { Component } from 'react';
import QuestionsIndexPage from './pages/QuestionsIndexPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        <QuestionsIndexPage />
      </div>
    );
  }
}

export default App;
