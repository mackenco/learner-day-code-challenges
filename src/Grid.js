import React, { Component } from "react";
import styled from "styled-components";
import Option from "./Option";

const SSection = styled.section`
  border: 1px solid #1c3646;
  border-radius: 1%;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px;
  grid-gap: 0.25rem;
  margin-top: 2rem;
  margin-right: 1rem;
`;

export const SGridItem = styled.div`
  font-weight: ${props => (props.header ? "bold" : "normal")};
  font-size: 28px;
  padding-top: ${props => (props.header ? "0" : "2rem")}
  font-family: ${props => (props.header ? "sans-serif" : "monospace")}
  background-color: ${props => {
    if (props.header) {
      return "white";
    }
    return props.valid ? "#3eb38c" : "#e53935";
  }};
`;

class Grid extends Component {
  render() {
    const { children, isValid, options } = this.props;
    return (
      <SSection>
        <SGridItem header>Input</SGridItem>
        <SGridItem header>Expected</SGridItem>
        <SGridItem header>Yours</SGridItem>
        {options.map(option => (
          <Option key={option.text} option={option} testFn={isValid} />
        ))}
        {children}
      </SSection>
    );
  }
}

export default Grid;
