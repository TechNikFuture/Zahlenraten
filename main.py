def on_button_a():
    global Zehnerstelle
    Zehnerstelle += 1
    basic.show_number(Zehnerstelle)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    global Vollständige_Eingabe
    Vollständige_Eingabe = parse_float("0")
    basic.clear_screen()
    Vollständige_Eingabe = parse_float("" + str(Zehnerstelle) + str(Einerstelle))
    basic.show_number(Vollständige_Eingabe)
    if Vollständige_Eingabe == Zufallszahl:
        basic.show_icon(IconNames.YES)
        basic.set_led_color(0x00ff00)
        init()
    else:
        init()
        basic.show_icon(IconNames.NO, 2000)
        if Vollständige_Eingabe < Zufallszahl:
            basic.show_icon(IconNames.ARROW_NORTH, 2000)
            basic.clear_screen()
        else:
            basic.show_icon(IconNames.ARROW_SOUTH, 2000)
            basic.clear_screen()
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global Einerstelle
    Einerstelle += 1
    basic.show_number(Einerstelle)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def init():
    global Zehnerstelle, Einerstelle
    Zehnerstelle = 0
    Einerstelle = 0
Einerstelle = 0
Vollständige_Eingabe = 0
Zehnerstelle = 0
Zufallszahl = 0
Zufallszahl = randint(1, 20)
init()