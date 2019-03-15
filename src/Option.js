import React, { Component } from "react";
import isBoolean from "lodash.isboolean";
import isEqual from "lodash.isequal";
import isString from "lodash.isstring";
import { SGridItem } from "./Grid";

class Option extends Component {
  render() {
    const { option, testFn } = this.props;

    let result = testFn(option);
    let _result = result;
    if (Array.isArray(result)) {
      _result = `[${result.join(", ")}]`;
    } else if (isString(option.result)) {
      _result = _result ? `"${_result}"` : "";
    }

    if (isBoolean(_result)) {
      _result = _result ? "match" : "no match";
    }

    const valid = isEqual(result, option.result);

    return (
      <>
        <SGridItem valid={valid}>{option.text}</SGridItem>
        <SGridItem valid={valid}>{option.expected}</SGridItem>
        <SGridItem valid={valid}>{_result}</SGridItem>
      </>
    );
  }
}

export default Option;
