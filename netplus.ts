/**
 * NetPlus
 */
//% weight=90 color="#00AEEF" icon="\uf1eb"
namespace NetPlus {

    function ctrl(): esp32.ATController {
        return esp32.defaultController() as esp32.ATController
    }

    let lastResponse: string[] = []

    //% block="AT $command"
    export function at(command: string) {
        ctrl().sendATTest(command)
    }

    //% block="Connect WiFi SSID $ssid Password $password"
    export function connectWiFi(ssid: string, password: string) {
        ctrl().wifiConnect(ssid, password)
    }

    //% block="HTTP GET $url"
    export function httpGet(url: string) {
        ctrl().httpRequestGet(url)
    }

    //% block="Ping $host"
    export function ping(host: string): number {
        return ctrl().ping(host)
    }

    //% block="Byte Length of $text"
    export function byteLength(text: string): number {
        return ctrl().byteLength(text)
    }

    //% block="ESP32 Ready"
    export function ready(): boolean {
        return ctrl().isEsp32Ready
    }

    //% block="WiFi Connected"
    export function connected(): boolean {
        return ctrl().isConnected
    }

    //% block="Firmware Version"
    export function version(): string {
        return ctrl().version()
    }

    //% block="On AT Response"
    //% draggableParameters
    export function onResponse(handler: (lines: string[]) => void) {
        ctrl().registerATResponse(function (r: string[]) {
            lastResponse = r
            handler(r)
        })
    }

    //% block="Last Response"
    export function last(): string {
        return lastResponse.join("\n")
    }

    //% block="RSSI"
    export function rssi(): number {
        return ctrl().getRssi()
    }
}