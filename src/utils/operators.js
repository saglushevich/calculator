export const isOperator = (value) => value.match(/[+\-*/%]/g);

export const getOperatorePriority = (value) => {
  if (value === "+" || value === "-") {
    return 1;
  } else if (value === "*" || value === "/" || value === "%") {
    return 2;
  }

  return 0;
};
