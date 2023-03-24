let Turn_Rand = false
let Sonar = 0
basic.showIcon(IconNames.Happy)
let seconds = 0
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
let Left = strip.range(0, 1)
let Right = strip.range(1, 1)
Right.showColor(neopixel.colors(NeoPixelColors.Yellow))
cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
Left.showColor(neopixel.colors(NeoPixelColors.Yellow))
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
basic.forever(function () {
    Sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    Turn_Rand = Math.randomBoolean()
    if (Turn_Rand == true) {
        cuteBot.moveTime(cuteBot.Direction.right, 40, 2)
        basic.pause(100)
    } else {
        cuteBot.moveTime(cuteBot.Direction.left, 40, 2)
        basic.pause(100)
    }
    basic.pause(200)
    if (Sonar > 2 && Sonar < 15) {
        cuteBot.motors(0, 0)
        basic.pause(1000)
        Turn_Rand = Math.randomBoolean()
        if (Turn_Rand == true) {
            cuteBot.moveTime(cuteBot.Direction.right, 40, 2)
            basic.pause(100)
        } else {
            cuteBot.moveTime(cuteBot.Direction.left, 40, 2)
            basic.pause(100)
        }
    } else {
        cuteBot.moveTime(cuteBot.Direction.forward, 60, randint(0, 3))
        basic.pause(200)
    }
})
