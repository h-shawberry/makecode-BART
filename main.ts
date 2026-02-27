function FullReset () {
    basic.clearScreen()
    BalloonLevel = 0
    Pot = 0
    round = 1
    PopLevel = randint(2, 11)
    Pause = false
}
function Instructions () {
    BalloonLevel = 1
    showBallonLevelLED()
    BalloonLevel = 2
    showBallonLevelLED()
    BalloonLevel = 3
    showBallonLevelLED()
    BalloonLevel = 4
    showBallonLevelLED()
    BalloonLevel = 5
    showBallonLevelLED()
    BalloonLevel = 6
    showBallonLevelLED()
    BalloonLevel = 7
    showBallonLevelLED()
    BalloonLevel = 8
    showBallonLevelLED()
    BalloonLevel = 9
    showBallonLevelLED()
    BalloonLevel = 10
    showBallonLevelLED()
    basic.showIcon(IconNames.Chessboard)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Pump")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Bank")
}
input.onButtonPressed(Button.A, function () {
    if (Pause == false) {
        BalloonLevel += 1
        showBallonLevelLED()
    }
})
function RoundEnd () {
    basic.clearScreen()
    BalloonLevel = 0
    PopLevel = randint(2, 11)
    round += 1
    Pause = false
}
function showBallonLevelLED () {
    if (BalloonLevel == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (BalloonLevel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
        music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 6) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 7) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 8) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 9) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 10) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
}
function HappyEnd () {
    Pause = true
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showString("Score")
    basic.showNumber(Pot)
    FullReset()
}
input.onButtonPressed(Button.B, function () {
    if (Pause == false) {
        basic.clearScreen()
        Pause = true
        music.play(music.createSoundExpression(WaveShape.Triangle, 1, 4213, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        Pot += BalloonLevel
        basic.showNumber(Pot)
        basic.clearScreen()
        RoundEnd()
    }
})
let PopLevel = 0
let round = 0
let Pot = 0
let BalloonLevel = 0
let Pause = false
Pause = true
Instructions()
FullReset()
basic.forever(function () {
    if (BalloonLevel >= PopLevel) {
        Pause = true
        basic.showIcon(IconNames.Chessboard)
        basic.pause(1000)
        RoundEnd()
    }
    if (round > 10) {
        HappyEnd()
    }
    if (input.logoIsPressed()) {
        HappyEnd()
    }
})
