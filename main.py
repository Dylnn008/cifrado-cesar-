def on_received_string(receivedString):
    pass
radio.on_received_string(on_received_string)

def on_received_value(name, value):
    basic.show_string(Palabra)
radio.on_received_value(on_received_value)

Palabra = ""
Palabra = "ipmb"
Clave = 1
radio.send_string(Palabra)

def on_forever():
    pass
basic.forever(on_forever)
