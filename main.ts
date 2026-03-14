function FullReset () {
    basic.clearScreen()
    BalloonLevel = 0
    Pot = 0
    round = 1
    nPumps = 0
    nPops = 0
    PopLevel = randint(2, 11)
    Pause = false
}
function Instructions () {
    for (let index = 0; index < 10; index++) {
        BalloonLevel += 1
        showBallonLevelLED()
    }
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
        nPumps += 1
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
    } else if (BalloonLevel == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
        music.play(music.tonePlayable(277, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 6) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 7) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 8) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 9) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(415, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (BalloonLevel == 10) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
}
function HappyEnd () {
    basic.clearScreen()
    Pause = true
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showString("Points")
    basic.showNumber(Pot)
    datalogger.log(
    datalogger.createCV("nPops", nPops),
    datalogger.createCV("nPumps", nPumps),
    datalogger.createCV("nRounds", round),
    datalogger.createCV("Pot", Pot),
    datalogger.createCV("AdjustednPumps", Pot / (round - nPops))
    )
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
let Pause = false
let PopLevel = 0
let nPops = 0
let nPumps = 0
let round = 0
let Pot = 0
let BalloonLevel = 0
music.setVolume(5)
Instructions()
FullReset()
datalogger.setColumnTitles(
"nPumps",
"nPops",
"Pot",
"nRounds",
"AdjustednPumps"
)
basic.forever(function () {
    if (BalloonLevel >= PopLevel) {
        Pause = true
        basic.showIcon(IconNames.Chessboard)
        nPops += 1
        basic.pause(1000)
        RoundEnd()
    }
    if (round > 15) {
        round += -1
        HappyEnd()
    }
    if (input.buttonIsPressed(Button.AB)) {
        HappyEnd()
    }
})
