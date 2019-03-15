import React, { Component } from "react";
import styled from "styled-components";
import isEqual from "lodash.isequal";

import tests from "./tests";
import Grid from "./Grid";
import Terminal from "./Terminal";
import "./App.css";

const SButton = styled.button`
  background-color: #f6f5fa;
  font-size: 28px;
  margin: 1rem;
  padding: 1rem;
  width: 150px;
`;

class App extends Component {
  state = {
    test: tests[0],
    content: tests[0].content
  };

  onChange = content => {
    this.setState({ content });
  };

  isValidRegex = ({ text }) => {
    const { content } = this.state;
    let regex;
    try {
      regex = new RegExp(content, "g");
    } catch (e) {
      console.log(e);
    }

    let match = regex.exec(text);
    if (!match) {
      match = false;
    }

    return (
      !!content && regex && match && match[0] && match[0].length === text.length
    );
  };

  isValidJs = ({ test }) => {
    const { content } = this.state;
    let userResult;
    try {
      let tester;
      if (Array.isArray(test)) {
        tester = `[${test}]`;
      } else {
        tester = `"${test}"`;
      }
      const toEval = `(${content})(${tester})`;
      console.log(toEval);

      userResult = eval(toEval);
    } catch (e) {
      console.log(e);
    }

    return userResult;
  };

  isValid = option => {
    const { type } = this.state.test;
    const fns = {
      js: this.isValidJs,
      regex: this.isValidRegex
    };

    return fns[type](option);
  };

  allIsValid = () => {
    const { options } = this.state.test;
    return options.every(o => {
      const result = this.isValid(o);
      return isEqual(result, o.result);
    });
  };

  onNext = () => {
    const { test } = this.state;
    const index = tests.findIndex(t => t.prompt === test.prompt);
    this.setState({
      content: tests[index + 1].content,
      test: tests[index + 1]
    });
  };

  render() {
    const { content } = this.state;
    const { prompt, options } = this.state.test;

    return (
      <div className="App">
        <h1 className="prompt">{prompt}</h1>
        <Terminal content={content} onChange={this.onChange} />
        <Grid options={options} isValid={this.isValid} />
        <SButton
          className="button"
          disabled={!this.allIsValid()}
          onClick={this.onNext}
        >
          Next
        </SButton>
      </div>
    );
  }
}

export default App;
