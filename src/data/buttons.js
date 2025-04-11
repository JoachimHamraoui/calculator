const buttons = [
  { label: "DE", type: "function" },
  { label: "AC", type: "function" },
  { label: ".", type: "value" },
  { label: "/", type: "operator" },

  { label: "7", type: "value" },
  { label: "8", type: "value" },
  { label: "9", type: "value" },
  { label: "*", type: "operator" },

  { label: "4", type: "value" },
  { label: "5", type: "value" },
  { label: "6", type: "value" },
  { label: "+", type: "operator" },

  { label: "1", type: "value" },
  { label: "2", type: "value" },
  { label: "3", type: "value" },
  { label: "−", type: "operator" }, // custom span

  { label: "00", type: "value" },
  { label: "0", type: "value" },
  { label: "=", type: "function", span: 2 },
  // '=' already placed
];

export default buttons;
