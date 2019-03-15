import React, { Component } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";

class Terminal extends Component {
  render() {
    const { content, onChange } = this.props;

    return (
      <section>
        <CodeMirror
          className="codemirror"
          value={content}
          onChange={(_, __, value) => onChange(value)}
          autoCursor={false}
          options={{ theme: "material", lineNumbers: true }}
        />
      </section>
    );
  }
}

export default Terminal;
