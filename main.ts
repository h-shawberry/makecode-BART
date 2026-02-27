input.onButtonPressed(Button.A, function () {
    BalloonLevel += 1
    if (BalloonLevel == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 2) {
        music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 3) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 4) {
        music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 5) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 6) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 7) {
        music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 8) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 9) {
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 10) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (BalloonLevel == 0) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Triangle, 1, 4213, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    Pot += BalloonLevel
    BalloonLevel = 0
    basic.showNumber(Pot)
    basic.clearScreen()
    PopLevel = randint(2, 11)
    round += 1
})
let PopLevel = 0
let Pot = 0
let BalloonLevel = 0
BalloonLevel = 0
Pot = 0
let round = 1
PopLevel = randint(2, 11)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)
music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Chessboard)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.pause(500)
basic.clearScreen()
basic.showString("Pump")
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.pause(500)
basic.clearScreen()
basic.showString("Bank")
basic.forever(function () {
    if (BalloonLevel >= PopLevel) {
        BalloonLevel = 0
        basic.showIcon(IconNames.Chessboard)
        basic.pause(200)
        round += 1
        PopLevel = randint(2, 11)
        BalloonLevel = 0
    }
})
basic.forever(function () {
    if (round > 10) {
        BalloonLevel = 0
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        basic.showString("Score")
        basic.showNumber(Pot)
        round = 1
        PopLevel = randint(2, 11)
        Pot = 0
        BalloonLevel = 0
    }
})
basic.forever(function () {
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
    }
    if (BalloonLevel == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
    }
    if (BalloonLevel == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 6) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 7) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 8) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 9) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    }
    if (BalloonLevel == 10) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
