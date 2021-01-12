input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
function convertc2f (c: number) {
    return input.temperature() * 1.8 + 32
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(convertc2f(input.temperature()))
})
