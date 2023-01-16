class AddToStackCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentStack) {
    return currentStack.push(this.value);
  }

  undo(currentStack) {
    return currentStack.pop();
  }
}

class GetFromStackCommand {
  execute(currentStack) {
    return currentStack.pop();
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue + this.value;
  }

  undo(currentValue) {
    return currentValue - this.value;
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue - this.value;
  }

  undo(currentValue) {
    return currentValue + this.value;
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return this.value * currentValue;
  }

  undo(currentValue) {
    return currentValue / this.value;
  }
}

class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    const divided = currentValue / this.value;
    return divided % 1 ? divided.toFixed(3) : divided;
  }

  undo(currentValue) {
    return currentValue * this.value;
  }
}

class RemainderCommand {
  constructor(value) {
    this.value = value;
    this.temp = 0;
  }

  execute(currentValue) {
    this.temp = Math.floor(currentValue / this.valueToRemainder);

    const divided = currentValue % this.value;
    return divided % 1 ? divided.toFixed(3) : divided;
  }

  undo(currentValue) {
    const tempVal = this.temp * this.value;
    return currentValue + tempVal;
  }
}

class Calculator {
  constructor() {
    this.value = 0;
    this.stack = [];
    this.history = [];
  }

  executeCommand(command) {
    this.history.push(command);
    if (command instanceof AddToStackCommand) {
      command.execute(this.stack);
    } else if (command instanceof GetFromStackCommand) {
      return command.execute(this.stack);
    } else {
      this.value = command.execute(this.value);
    }
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }

  setValue(value) {
    this.value = value;
  }
}

export {
  Calculator,
  AddToStackCommand,
  GetFromStackCommand,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  RemainderCommand,
};
