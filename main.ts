/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Illia
 * Created on: MAR 2026
 * This program  degrees Celsius to Kelvin
*/

let temperatureKelvin: number
let temperatureCelsius: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.B, function () {

    temperatureKelvin = input.temperature()
    temperatureCelsius = (temperatureKelvin + 273.15)
    temperatureCelsius = Math.round(temperatureCelsius)

    basic.clearScreen()
    basic.showString('The temperature is: ' + temperatureCelsius.toString() + ' K')
})

