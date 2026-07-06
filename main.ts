AT.onATReturn(function (atResult) {
    for (let index = 0; index <= atResult.length; index++) {
        game.showLongText(atResult[index], DialogLayout.Bottom)
    }
})
wifi.connect("jsm", "Yacht123")
pause(5000)
let request = "GET / HTTP/1.1\\r\\nHost: clouddata.scratch.mit.edu\\r\\nConnection: Upgrade\\r\\nUpgrade: websocket\\r\\nOrigin: https://scratch.mit.edu\\r\\nSec-WebSocket-Version: 13\\r\\nSec-WebSocket-Key: MDEyMzQ1Njc4OUFCQ0RFRg==\\r\\nSec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\\r\\n\\r\\n"
AT.sendCommand("CIPSTART=\"SSL\",\"clouddata.scratch.mit.edu\",443")
pause(2000)
AT.sendCommand("CIPSEND=" + request.length)
pause(2000)
AT.sendCommand(request)
pause(2000)
AT.sendCommand("")
