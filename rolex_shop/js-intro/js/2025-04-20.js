/*Домашка к 2025-04-20

В js-intro/js/ создать файл hw-2025-04-20.js, в нем:

1. Написать функции вычисления квадрата и куба числа: square(base) и cube(base) - соответственно

2. Написать функцию поиска объема прямоугольного параллелепипеда rectangular_parallelepiped_volume(length, width, height):
- length - длина
- width - ширина
- height - высота

3. Написать функцию вычисления степени числа pow(base, exp):
- base - основание степени
- exp - показатель степени

Запрещается использовать готовые математические функции.
Разрешены только стандартные математические операторы: +, -, *, /
*/

function square(base) {
    return base * base;
}

function cube(base) {
    return square(base) * base;
}

function paralilipipid(w, l, h) {
    if (w > 0 && l > 0 && h > 0) {
        return  w * l * h;
    }
    else {
        return "dolbaebas";
    }

}

function pow(base, exp) {
    if (exp>=1) {
        while (exp>1) {
            base = base * base
            exp--
        }
        return base;
    }

    else if (base==0 && exp ==0) {
        return "idi nahuy";
    }

    else if (exp==0) {
        return 1;
    }

    else if (exp < 0) {
        return "idi nahuy";
    }

}

console.log(square(4));
console.log(cube(3));
console.log(paralilipipid(3, 3, 2));
console.log(pow(3, 2));

function pow_rec(base, exp) {
    if (exp == 0 && base == 0 || exp < 0) return undefined;
    if (exp == 0) return 1;
    if (base == 0 || base ==1) return base;
    return base * pow_rec(base, exp - 1);
}

console.log(pow_rec(2, 2));

function factor_rec(n) {
    if (n < 0) return;
    if (n == 0) return 1;
    return n * factor_rec(n - 1);
}

console.log(factor_rec(3))

function factor(n) {
    if (n > 0) {
        let t = 1
        for(let i = 1; i <= n; i++) {
            t *= i
        }
        return t;
    }

    else if (n < 0) {
        return "pashel nahuy";
    }
}

console.log(factor(3));