radio.setGroup(4)
basic.forever(function () {
    radio.sendValue("acceleration", input.acceleration(Dimension.Z))
})
