input.onPinPressed(TouchPin.P0, function () {
    comienzo = false
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.pause(randint(2000, 7000))
    basic.showIcon(IconNames.Heart)
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
        contadorP2 += 1
        basic.showNumber(contadorP2)
    } else {
        comienzo = false
        contadorP2 += -1
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
        contadorP1 += 1
        basic.showNumber(contadorP1)
    } else {
        comienzo = false
        contadorP1 += -1
        basic.showString("1 comienzo falso")
    }
})
let comienzo = false
let contadorP2 = 0
let contadorP1 = 0
contadorP1 = 0
contadorP2 = 0
basic.forever(function () {
	
})
