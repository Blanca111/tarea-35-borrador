let comienzo = false
input.onPinPressed(TouchPin.P0, function () {
    comienzo = false
    basic.showIcon(IconNames.Heart)
    basic.pause(randint(2000, 7000))
    basic.clearScreen()
    comienzo = true
})
input.onPinPressed(TouchPin.P2, function () {
    if (comienzo) {
        comienzo = false
        basic.showLeds(`
            . # # . .
            # . # . .
            . . # . .
            . # . . .
            # # # # .
            `)
    } else {
        comienzo = false
        basic.showString("2 comienzo falso")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (comienzo) {
        comienzo = false
        basic.showLeds(`
            . . . . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else {
        comienzo = false
        basic.showString("1 comienzo falso")
    }
})
basic.forever(function () {
	
})
