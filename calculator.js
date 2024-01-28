(function () {
  const data = {
    num1: undefined,
    currentOp: undefined,
    v: undefined,
  };

  function initateCalculator() {
    data.v = document.getElementById('value');

    document.querySelectorAll('.btnNb').forEach((el) => {
      el.addEventListener('click', onNumberButtonClick);
    });

    document.querySelectorAll('.btn-op').forEach((el) => {
      if (el.className.indexOf('op-') !== -1) {
        const op = el.className
          .substring(el.className.indexOf('op-'))
          .substring(3);
        switch (op) {
          case 'clear':
            el.addEventListener('click', onClearClick);
            break;
          case 'delete':
            el.addEventListener('click', onDeleteClick);
            break;
          case '4':
          // divide
          case '3':
          // multiply
          case '2':
          // substract
          case '1':
            // add
            el.addEventListener('click', () => onOperationClick(op));
            break;
          case 'equal':
            el.addEventListener('click', onEqualClick);
            break;
        }
      }
    });
  }

  function onNumberButtonClick(ev) {
    const val = ev.target.innerText;
    if (data.v.value === '0' && val !== '.') data.v.value = val;
    else data.v.value += val;
  }

  function onClearClick() {
    data.num1 = undefined;
    data.currentOp = undefined;
    data.v.value = '0';
  }

  function onDeleteClick() {
    if (data.v.value.length > 1)
      data.v.value = data.v.value.substring(0, data.v.value.length - 1);
    else data.v.value = 0;
  }

  function onOperationClick(op) {
    data.num1 = parseFloat(data.v.value);
    data.currentOp = op;
    data.v.value = '0';
  }

  function onEqualClick() {
    const num1 = data.num1;
    const num2 = parseFloat(data.v.value);
    let result = undefined;
    switch (data.currentOp) {
      case '1':
        result = num1 + num2;
        break;
      case '2':
        result = num1 - num2;
        break;
      case '3':
        result = num1 * num2;
        break;
      case '4':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    data.v.value = result;
  }

  initateCalculator();
})();
