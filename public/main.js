const startUrl = process.env.NWJS_START_URL || '../build/index.html'

nw.Window.open(startUrl, {
    width: Math.round(screen.width * .50),
    height: Math.round(screen.height * .50)
}, function(win) {})