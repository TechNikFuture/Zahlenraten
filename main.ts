input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zehnerstelle += 1
    basic.showNumber(Zehnerstelle)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Vollständige_Eingabe = parseFloat("0")
    basic.clearScreen()
    Vollständige_Eingabe = parseFloat("" + Zehnerstelle + Einerstelle)
    basic.showNumber(Vollständige_Eingabe)
    if (Vollständige_Eingabe == Zufallszahl) {
        basic.showIcon(IconNames.Yes)
        basic.setLedColor(0x00ff00)
        init()
    } else {
        init()
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
    Einerstelle += 1
    basic.showNumber(Einerstelle)
})
function init () {
    Zehnerstelle = 0
    Einerstelle = 0
}
let Einerstelle = 0
let Vollständige_Eingabe = 0
let Zehnerstelle = 0
let Zufallszahl = 0
Zufallszahl = randint(1, 20)
init()
