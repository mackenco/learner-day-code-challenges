export default [
  {
    content: "",
    options: [
      { expected: "match", result: true, text: "cat" },
      { expected: "match", result: true, text: "dog" },
      { expected: "no match", result: false, text: "cow" }
    ],
    prompt: "Write another Regular Expression to match all the options",
    type: "regex"
  },
  {
    content: "",
    options: [
      { expected: "match", result: true, text: "bark" },
      { expected: "no match", result: false, text: "baa" },
      { expected: "no match", result: false, text: "bellow" },
      { expected: "no match", result: false, text: "boom" }
    ],
    prompt: "Write a Regular Expression to match all the options",
    type: "regex"
  },
  {
    content: `function(word){

}`,
    options: [
      {
        expected: `"cdcdm"`,
        result: "cdcdm",
        test: "codecademy",
        text: `"codecademy"`
      },
      {
        expected: `"hlowrd"`,
        result: "hlowrd",
        test: "hello world!",
        text: `"hello world!"`
      },
      {
        expected: `""`,
        result: "",
        test: "",
        text: `""`
      }
    ],
    prompt:
      "Fill in the function body so that it returns a string containing every other letter in the parameter word",
    type: "js"
  },
  {
    content: "function(array){ }",
    options: [
      {
        expected: "[2, 4, 6]",
        result: [2, 4, 6],
        test: [1, 2, 3],
        text: "[1, 2, 3]"
      },
      {
        expected: "[]",
        result: [],
        test: [],
        text: "[]"
      },
      {
        expected: "[-4, -8, -16]",
        result: [-4, -8, -16],
        test: [-2, -4, -8],
        text: "[-2, -4, -8]"
      }
    ],
    prompt:
      "Fill in the function body so that it returns a new array with every value from the original array doubled.",
    type: "js"
  }
].reverse();
