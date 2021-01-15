input.onButtonPressed(Button.A, function () {
    basic.showNumber(add(68, 50))
})
function convertc2f (c: number) {
    return input.temperature() * 1.8 + 32
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(convertc2f(input.temperature()))
})
function add (num1: number, num2: number) {
    return num1 + num2
}
