// Cambiar modo con botón A
input.onButtonPressed(Button.A, function () {
    modo = 0
    // modo transmisor
    basic.showString("TX")
})
// Descifrado César
function descifrar (texto: string, clave: number) {
    for (let j = 0; j <= texto.length - 1; j++) {
        d = texto.charCodeAt(j)
        salida2 = "" + salida2 + String.fromCharCode(d - clave)
    }
    return salida2
}
// Receptor
radio.onReceivedString(function (recibido) {
    if (modo == 1) {
        descifrado = descifrar(recibido, clave)
        // Animación
        basic.showLeds(`
            . # . # .
            # . # . #
            . . # . .
            # . # . #
            . # . # .
            `)
        basic.pause(300)
        // Mostrar mensaje descifrado
        basic.showString(descifrado)
    }
})
// 0 = transmisor, 1 = receptor
// Cifrado César
function cifrar (texto: string, clave: number) {
    for (let i = 0; i <= texto.length - 1; i++) {
        c = texto.charCodeAt(i)
        salida = "" + salida + String.fromCharCode(c + clave)
    }
    return salida
}
// Cambiar modo con botón B
input.onButtonPressed(Button.B, function () {
    modo = 1
    // modo receptor
    basic.showString("RX")
})
let cifrado = ""
let salida = ""
let c = 0
let descifrado = ""
let salida2 = ""
let d = 0
let modo = 0
let clave = 0
radio.setGroup(1)
clave = 1
let mensaje = "HOLA"
// Bucle principal
basic.forever(function () {
    if (modo == 0) {
        // Transmisor
        cifrado = cifrar(mensaje, clave)
        radio.sendString(cifrado)
        basic.showString(cifrado)
        basic.pause(1500)
    }
})
