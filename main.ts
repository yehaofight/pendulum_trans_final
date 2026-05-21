radio.setGroup(4)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
