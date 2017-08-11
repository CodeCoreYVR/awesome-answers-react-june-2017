import React, { Component } from 'react';
import {
  BrowserRouter as Router, // When importing, use `as` to alias imported to something else
  Route,
  Link
} from 'react-router-dom';
import QuestionsIndexPage from './pages/QuestionsIndexPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/questions'>Questions</Link>
            <Link to='/questions/new'>New Question</Link>
          </nav>
          <h1>Awesome Answers</h1>
          <Route exact path='/' component={QuestionsIndexPage} />
          <Route exact path='/questions' component={QuestionsIndexPage} />
        </div>
      </Router>
    );
  }
}

export default App;
