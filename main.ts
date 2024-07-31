basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    led.setBrightness(58)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    led.setBrightness(255)
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    led.setBrightness(255)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
