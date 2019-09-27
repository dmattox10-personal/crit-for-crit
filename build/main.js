const startUrl = process.env.NWJS_START_URL || '../build/index.html'

nw.Window.open(startUrl, {
    width: Math.round(screen.width * .80),
    height: Math.round(screen.height * .80)
}, function(win) {})