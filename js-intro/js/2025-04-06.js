function calculate(sign, num1, num2) {

    let result = NaN;

    switch (sign) {
        case "+":
            result = num1 + num2;
            break;
    
        case "-":
            result = num1 - num2;
            break;
    
        case "*":
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Деление на ноль!");
            } else {
                result = num1 / num2;
            }
            break;
    }
    return result;
}

function calculator() {
    let num1, num2, sign, result = NaN;
    if (!confirm("Запустьт калькуклятор?")) return false;
    num1 = Number(prompt("введите первое число", "0"));
    num2 = Number(prompt("введите второе число", "0"));
    sign = prompt("введите действие (+ - * /)", "+");

result = calculate(sign, num1, num2)

if (isNaN(result)) {
    alert("Некорректный ввод!");
} else {
    alert(`Ответ: ${result}`);
}

    return true
};


let needRun = true
while (calculator());