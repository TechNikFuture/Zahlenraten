input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Richtig_Boolean == 1) {
        reset()
    }
    Zehnerstelle += 1
    basic.showNumber(Zehnerstelle)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Vollständige_Eingabe = parseFloat("0")
    basic.clearScreen()
    Vollständige_Eingabe = parseFloat("" + Zehnerstelle + Einerstelle)
    basic.showNumber(Vollständige_Eingabe)
    if (Vollständige_Eingabe == Zufallszahl) {
        basic.showIcon(IconNames.Yes, 500)
        Zufallszahl = randint(1, 20)
        basic.setLedColor(0x00ff00)
        Richtig_Boolean = 1
    } else {
        init()
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No, 2000)
        if (Vollständige_Eingabe < Zufallszahl) {
            basic.showIcon(IconNames.ArrowNorth, 2000)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.ArrowSouth, 2000)
            basic.clearScreen()
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Richtig_Boolean == 1) {
        reset()
    }
    Einerstelle += 1
    basic.showNumber(Einerstelle)
})
function init () {
    basic.turnRgbLedOff()
    Zehnerstelle = 0
    Einerstelle = 0
}
function reset () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
    Richtig_Boolean = 0
    Zufallszahl = randint(1, 20)
    init()
}
let Zufallszahl = 0
let Einerstelle = 0
let Vollständige_Eingabe = 0
let Zehnerstelle = 0
let Richtig_Boolean = 0
reset()
